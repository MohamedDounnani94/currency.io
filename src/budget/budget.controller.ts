import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { BudgetService } from './budget.service';
import IBudget from './budget.interface';
import { BudgetBodyRequestDto, BudgetIdRequestDto } from './dto'
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('budgets')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Get('/')
  @ApiResponse({ status: 200, description: 'List of all budgets'})
  findAll(): Promise<IBudget[]> {
    return this.budgetService.findAll();
  }

  @Post()
  @ApiBody({type: BudgetBodyRequestDto})
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  create(@Body() BudgetBodyRequestDto: BudgetBodyRequestDto ) {
    return this.budgetService.create(BudgetBodyRequestDto)
  }

  @ApiParam(BudgetIdRequestDto)
  @Get(':id')
  @ApiResponse({ status: 200, description: 'budget instance'})
  findOneById(@Param() BudgetIdRequestDto: BudgetIdRequestDto): Promise<IBudget> {
    return this.budgetService.findOneById(BudgetIdRequestDto.id)
  }

  @ApiParam(BudgetIdRequestDto)
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Resource id successfully deleted'})
  deleteOneById(@Param() BudgetIdRequestDto: BudgetIdRequestDto) {
    return this.budgetService.deleteOneById(BudgetIdRequestDto.id)
  }

  @ApiParam(BudgetIdRequestDto)
  @Patch(':id')
  @ApiResponse({ status: 200, description: 'budget instance updated'})
  updateById(@Param() BudgetIdRequestDto: BudgetIdRequestDto, @Body() BudgetBodyRequestDto: BudgetBodyRequestDto) {
    return this.budgetService.updateById(BudgetIdRequestDto.id, BudgetBodyRequestDto)
  }
}