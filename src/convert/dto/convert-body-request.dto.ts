import {IsNotEmpty, IsString, IsNumber, Matches} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export default class ConvertBodyRequestDto {

  @ApiProperty({
    description: 'The amount to convert',
    default: 12.35
  })
  @IsNotEmpty()
  @IsNumber()
  amount: number

  @ApiProperty({
    description: 'ISO currency code for the source currency to convert',
    default: 'EUR'
  })
  @IsNotEmpty()
  @IsString()
  srcCurrency: string

  @ApiProperty({
    description: 'ISO currency code for the destination currency to convert',
    default: 'USD'
  })
  @IsNotEmpty()
  @IsString()
  destCurrency: string

  @ApiProperty({
    description: 'reference date for the exchange rate, in YYYY-MM-DD format',
    default: '2020-05-10'
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  referenceDate: string
}