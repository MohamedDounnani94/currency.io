import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { HumanController } from '../human/human.controller';
import { AppService } from './app.service';
import { HumanService } from '../human/human.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { Human } from '../human/human.entity'
import { HumanModule } from '../human/human.module'
import { APP_PIPE } from '@nestjs/core';
import { DbModule } from '../db/db.module'
import { ConfigModule } from '@nestjs/config';
import Configuration from './config/configuration'


@Module({
  imports: [
    DbModule,
    HumanModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Configuration]
    }),
  ],
  controllers: [AppController, HumanController],
  providers: [
    AppService,
    HumanService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}

  getHi() {
    console.log('hola')
  }
}
