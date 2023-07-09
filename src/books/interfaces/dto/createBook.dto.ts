import { ApiProperty } from '@nestjs/swagger'
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ERROR_MESSAGES } from '../../../constants'

export class CreateBookDto {
  @ApiProperty()
  @IsNotEmpty({ message: ERROR_MESSAGES.NOT_EMPTY })
  @IsString()
  readonly title: string

  @ApiProperty()
  @IsString()
  @IsDefined()
  readonly author: string

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly description: string
}
