import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Budget } from '../budget/budget.entity'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('postgreSqlDatabase.testHost'),
        port: configService.get<number>('postgreSqlDatabase.testPort'),
        username: configService.get<string>('postgreSqlDatabase.testUsername'),
        password: configService.get<string>('postgreSqlDatabase.testPassword'),
        database: configService.get<string>('postgreSqlDatabase.testDatabase'),
        entities: [Budget],
        synchronize: true,
      }),
      inject: [ConfigService],
    })
  ],
  exports: [
    TypeOrmModule,
  ]
})

export class TestDbModule {

}