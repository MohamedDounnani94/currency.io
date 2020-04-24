import { IsNotEmpty, IsNumberString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export default class BudgetIdRequestDto {
  @ApiProperty({
    description: 'The id of a budget',
    minimum: 1,
    default: 1
  })
  @IsNotEmpty()
  @IsNumberString()
  id: string;
}