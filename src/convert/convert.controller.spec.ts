import { Test, TestingModule } from '@nestjs/testing';
import { ConvertController } from './convert.controller';
import { ConvertService } from './convert.service';
import {CurrencyModule} from "../currency/currency.module";
import {CurrencyService} from "../currency/currency.service";

const currencies =
    [
        {
            time: '2020-05-08',
            Cube:
                [
                    {currency: 'USD', rate: '1.0843'},
                    {currency: 'JPY', rate: '115.34'},
                    {currency: 'BGN', rate: '1.9558'},
                    {currency: 'CZK', rate: '27.251'},
                    {currency: 'DKK', rate: '7.4598'},
                    {currency: 'GBP', rate: '0.87535'},
                    {currency: 'HUF', rate: '349.38'},
                    {currency: 'PLN', rate: '4.5482'},
                    {currency: 'RON', rate: '4.828'},
                    {currency: 'SEK', rate: '10.5875'},
                    {currency: 'CHF', rate: '1.0529'},
                    {currency: 'ISK', rate: '158.5'},
                    {currency: 'NOK', rate: '11.0695'},
                    {currency: 'HRK', rate: '7.5573'},
                    {currency: 'RUB', rate: '79.8383'},
                    {currency: 'TRY', rate: '7.7252'},
                    {currency: 'AUD', rate: '1.6613'},
                    {currency: 'BRL', rate: '6.3074'},
                    {currency: 'CAD', rate: '1.5118'},
                    {currency: 'CNY', rate: '7.6719'},
                    {currency: 'HKD', rate: '8.4052'},
                    {currency: 'IDR', rate: '16229.26'},
                    {currency: 'ILS', rate: '3.8031'},
                    {currency: 'INR', rate: '81.9615'},
                    {currency: 'KRW', rate: '1322.41'},
                    {currency: 'MXN', rate: '25.9023'},
                    {currency: 'MYR', rate: '4.6994'},
                    {currency: 'NZD', rate: '1.7668'},
                    {currency: 'PHP', rate: '54.681'},
                    {currency: 'SGD', rate: '1.5326'},
                    {currency: 'THB', rate: '34.958'},
                    {currency: 'ZAR', rate: '19.997'}
                ]
        }
    ]



describe('ConvertController', () => {
    let convert: TestingModule;

    beforeAll(async () => {
        convert = await Test.createTestingModule({
            imports: [CurrencyModule],
            controllers: [ConvertController],
            providers: [ConvertService],
        }).compile();


    });


    describe('get welcome from converter service', () => {
        it('should return "Hello from converter service"', async () => {
            const convertController = convert.get<ConvertController>(ConvertController);
            const currencyService = convert.get<CurrencyService>(CurrencyService)
            currencyService.setCurrencies(currencies)
            expect(await convertController.convert({
                amount: 12.50,
                srcCurrency: "EUR",
                destCurrency: "USD",
                referenceDate: "2020-05-08"}
            )).toMatchObject({
                amount: 13.55375,
                currency: "USD"
            });
        });
    });
});
