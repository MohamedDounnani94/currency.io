import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { BudgetController } from '../budget/budget.controller';
import { AppService } from './app.service';
import { BudgetService } from '../budget/budget.service';
import { Connection } from 'typeorm'
import { BudgetModule } from '../budget/budget.module'
import { APP_PIPE } from '@nestjs/core';
import { DbModule } from '../db/db.module'
import { ConfigModule } from '@nestjs/config';
import Configuration from './config/configuration'


@Module({
  imports: [
    DbModule,
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
})
export class AppModule {
  constructor(private connection: Connection) {}
}
