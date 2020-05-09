import {HttpModule, Module, ValidationPipe} from '@nestjs/common';
import { AppController } from './app.controller';
import { ConvertController } from '../convert/convert.controller';
import { AppService } from './app.service';
import { ConvertService } from '../convert/convert.service';
import { ConvertModule } from '../convert/convert.module'
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import Configuration from './config/configuration'
import {CurrencyModule} from "../currency/currency.module";


@Module({
  imports: [
    ConvertModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Configuration]
    }),
    CurrencyModule,
    HttpModule,
  ],
  controllers: [AppController, ConvertController],
  providers: [
    AppService,
    ConvertService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule {
  constructor() {}
}
