import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello from converter service');
  });

  it('/convert (POST) EUR to USD should return USD amount', async () => {
    const currencyService = app.get('CurrencyService')
    await currencyService.findAll()
    return request(app.getHttpServer())
        .post('/convert')
        .send({
          amount: 12.50,
          srcCurrency: "EUR",
          destCurrency: "USD",
          referenceDate: "2020-05-08"
        })
        .expect(201)
        .expect({ amount: 13.55375, currency: "USD"});
  });

  it('/convert (POST) EUR to SSS should return SSS amount to 0 (not found)', async () => {
    const currencyService = app.get('CurrencyService')
    await currencyService.findAll()
    return request(app.getHttpServer())
        .post('/convert')
        .send({
          amount: 12.50,
          srcCurrency: "EUR",
          destCurrency: "SSS",
          referenceDate: "2020-05-08"
        })
        .expect(201)
        .expect({ amount: 0, currency: "SSS"});
  });

  it('/convert (POST) SSS to SSS should return SSS amount to 0 (not found)', async () => {
    const currencyService = app.get('CurrencyService')
    await currencyService.findAll()
    return request(app.getHttpServer())
        .post('/convert')
        .send({
          amount: 12.50,
          srcCurrency: "SSS",
          destCurrency: "SSS",
          referenceDate: "2020-05-08"
        })
        .expect(201)
        .expect({ amount: 0, currency: "SSS"});
  });

    it('/convert (POST) SSS to EUR should return EUR amount to 0 (not found)', async () => {
        const currencyService = app.get('CurrencyService')
        await currencyService.findAll()
        return request(app.getHttpServer())
            .post('/convert')
            .send({
                amount: 12.50,
                srcCurrency: "SSS",
                destCurrency: "EUR",
                referenceDate: "2020-05-08"
            })
            .expect(201)
            .expect({ amount: 0, currency: "EUR"});
    });
});
