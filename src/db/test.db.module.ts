import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Human } from '../human/human.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'sqlite',
        database: './data/db.sqlite',
        entities: [Human],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
    })
  ],
  exports: [
    TypeOrmModule,
  ]
})

export class TestDbModule {

}