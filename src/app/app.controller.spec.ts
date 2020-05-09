import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import Configuration from './config/configuration'
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [Configuration]
        }),
      ],
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: APP_PIPE,
          useClass: ValidationPipe
        }
      ],
    }).compile();
  });


  describe('get welcome from converter service', () => {
    it('should return "Hello from converter service"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Hello from converter service');
    });
  });
});
