import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Human } from '../human/human.entity'
import { ConfigModule, ConfigService } from '@nestjs/config'
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('postgreSqlDatabase.host'),
        port: configService.get<number>('postgreSqlDatabase.port'),
        username: configService.get<string>('postgreSqlDatabase.username'),
        password: configService.get<string>('postgreSqlDatabase.password'),
        database: configService.get<string>('postgreSqlDatabase.database'),
        entities: [Human],
        synchronize: true,
      }),
      inject: [ConfigService],
    })
  ],
  controllers:[],
  providers: [],
  exports: [
    TypeOrmModule,
  ]
})

export class DbModule {

}