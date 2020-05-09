import {HttpService, Injectable} from "@nestjs/common";
const parser = require('xml2json')

@Injectable()
export class CurrencyService {
    _currencies = []

    constructor(private httpService: HttpService) {}

    async findAll(): Promise<void> {
        const xml = await this.httpService.get(
            'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml',
        ).toPromise();

        const json = JSON.parse(parser.toJson(xml.data, {reversible: true}));
        this._currencies = json['gesmes:Envelope']['Cube']['Cube'] || []
    }

    setCurrencies(currencies) {
        this._currencies = currencies
    }

    getCurrencyRate(time, currency): number{
        const currencyByTime = this._currencies.find(o => o.time === time)
        if(!currencyByTime) return 0
        const cube = currencyByTime['Cube'] || []
        const element = cube.find(element => element.currency === currency)
        if(!element) return 0
        return parseFloat(element.rate)
    }
}