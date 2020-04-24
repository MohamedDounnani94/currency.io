import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


async function server() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)
  const port = config.get<number>('port')
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('My budget io')
    .setVersion('1.0')
    .addTag('my-budget-io')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(port, () => {
    Logger.log(`[Main.ts] Server started at localhost:${port}`)
  });
}
server();
