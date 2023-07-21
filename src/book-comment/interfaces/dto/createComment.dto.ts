import { ApiProperty } from '@nestjs/swagger'

export class CreateCommentDto {
  // @ApiProperty()
  // readonly id: number

  @ApiProperty()
  readonly bookId: number

  @ApiProperty()
  readonly comment: string
}
