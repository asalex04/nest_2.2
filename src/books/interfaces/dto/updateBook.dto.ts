import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { ERROR_MESSAGES } from '../../../constants'

export class UpdateBookDto {
  @ApiProperty()
  @IsNotEmpty({ message: ERROR_MESSAGES.NOT_EMPTY })
  readonly title: string

  @ApiProperty()
  readonly author: string

  @ApiProperty()
  readonly description: string
}
