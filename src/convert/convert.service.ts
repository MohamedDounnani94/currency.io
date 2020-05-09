import IConvert from './convert.interface'
import {Injectable} from "@nestjs/common";
import {CurrencyService} from "../currency/currency.service";

@Injectable()
export class ConvertService {
  constructor(private currencyService: CurrencyService) {}
  async convert(convert: IConvert): Promise<IConvert> {
    const rate = this.currencyService.getCurrencyRate(convert.referenceDate, convert.destCurrency)
    return {
      amount: convert.amount * rate,
      currency: convert.destCurrency,
    }
  }
}