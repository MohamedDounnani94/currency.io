import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Human } from '../human/human.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'unicorn_user',
      password: 'magical_password',
      database: 'rainbow_database',
      entities: [Human],
      synchronize: true,
    }),
  ],
  controllers:[],
  providers: [],
  exports: [
    TypeOrmModule,
  ]
})

export class DbModule {}