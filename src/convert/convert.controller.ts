import { Controller, Post, Body } from '@nestjs/common';
import { ConvertService } from './convert.service';
import { ConvertBodyRequestDto } from './dto'
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Post()
  @ApiBody({type: ConvertBodyRequestDto})
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  convert(@Body() convertBodyRequestDto: ConvertBodyRequestDto ) {
    return this.convertService.convert(convertBodyRequestDto)
  }
}