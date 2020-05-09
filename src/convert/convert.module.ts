import { Module } from '@nestjs/common';
import { ConvertController } from './convert.controller';
import { ConvertService } from './convert.service';
import {CurrencyModule} from "../currency/currency.module";

@Module({
  imports: [CurrencyModule],
  controllers: [ConvertController],
  providers: [ConvertService],
})
export class ConvertModule {}
