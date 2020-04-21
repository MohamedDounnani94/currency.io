import { IsNotEmpty, IsString, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export default class BudgetBodyRequestDto {

  @ApiProperty({
    description: 'The name of a Budget',
    default: 'Affitto'
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The description of a Budget',
    default: 'Affitto per la camera singola'
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The amount of a Budget',
    minimum: 1,
    default: 1
  })
  @IsNotEmpty()
  @IsInt()
  amount: number;


  @ApiProperty({
    description: 'The type of a Budget',
    default: 'Spesa ricorrente'
  })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({
    description: 'The expenseType of a Budget',
    default: 'INCOME'
  })
  @IsNotEmpty()
  @IsString()
  expenseType: string;
}