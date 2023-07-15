import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'
import { ERROR_MESSAGES } from 'src/constants'

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: ERROR_MESSAGES.EMAIL_REQUIRED })
  @IsEmail({}, { message: ERROR_MESSAGES.INVALID_EMAIL_FORMAT })
  readonly email: string

  @ApiProperty()
  @Length(6, 25, {
    message: ERROR_MESSAGES.PASSWORD_MIN_LENGTH
  })
  readonly password: string

  @ApiProperty()
  @IsNotEmpty({message: ERROR_MESSAGES.NOT_EMPTY})
  readonly firstName: string

  @ApiProperty()
  readonly lastName: string
}
