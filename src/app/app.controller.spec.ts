import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestDbModule } from '../db/test.db.module'
import { ConfigModule } from '@nestjs/config';
import Configuration from './config/configuration'
import { BudgetController } from '../budget/budget.controller';
import { BudgetBodyRequestDto } from '../budget/dto';
import { ExpenseType, Budget } from '../budget/budget.entity';
import { BudgetService } from '../budget/budget.service';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { BudgetModule } from '../budget/budget.module';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TestDbModule,
        BudgetModule,
        ConfigModule.forRoot({
          isGlobal: true,
          load: [Configuration]
        }),
      ],
      controllers: [AppController, BudgetController],
      providers: [
        AppService,
        BudgetService,
        {
          provide: APP_PIPE,
          useClass: ValidationPipe
        }
      ],
    }).compile();
  });


  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('Budget Creation', () => {
    it('should return Budget Name', async () => {
      const bodyRequest: BudgetBodyRequestDto = {
        name: 'Spesa conad',
        description: 'Spesa al conad',
        amount: 17.39,
        expenseType: ExpenseType.EXIT,
        transactionTime: new Date()
      }
      const budgetController = app.get<BudgetController>(BudgetController);
      const budget = await budgetController.create(bodyRequest)
      expect(budget.name).toBe(bodyRequest.name)
    })
  })

  describe('Budget Find All', () => {
    it('should return An array of budgets', async () => {
      const budgetController = app.get<BudgetController>(BudgetController);
      const budgets = await budgetController.findAll()
      expect(Array.isArray(budgets)).toBe(true)
    })
  })

  describe('Budget Find One by Id', () => {
    it('should return budget by id', async () => {
      const budgetController = app.get<BudgetController>(BudgetController);
      const bodyRequest: BudgetBodyRequestDto = {
        name: 'Spesa conad',
        description: 'Spesa al conad',
        amount: 17.39,
        expenseType: ExpenseType.EXIT,
        transactionTime: new Date()
      }
      const budget = await budgetController.create(bodyRequest)
      const findBudget = await budgetController.findOneById({id: budget.id})
      expect(bodyRequest.name).toBe(findBudget.name)
    })
  })

  describe('Budget Delete One by Id', () => {
    it('should return budget by id', async () => {
      const budgetController = app.get<BudgetController>(BudgetController);
      const bodyRequest: BudgetBodyRequestDto = {
        name: 'Spesa conad',
        description: 'Spesa al conad',
        amount: 17.39,
        expenseType: ExpenseType.EXIT,
        transactionTime: new Date()
      }
      const budget = await budgetController.create(bodyRequest)
      const message = await budgetController.deleteOneById({id: budget.id})
      expect(message).toBe(`resource: ${budget.id} successfully deleted`)
    })
  })
});
