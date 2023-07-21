import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookCommentService } from './book-comment.service';
import { IbookId } from './interfaces/book_id';
import { BookComment } from './models/bookComment.model';
import { CreateCommentDto } from './interfaces/dto/createComment.dto'

@ApiTags('Comments')
@Controller('book-comment')
export class BookCommentController {
  constructor(
    private bookCommentService: BookCommentService
  ) {}

  @ApiOperation({ summary: 'Все комментарии по книге' })
  @ApiResponse({ status: 200, type: [BookComment]})
  @Get('/:id')
  findAllBookComment(@Param() { bookId }: IbookId): Promise<BookComment[]> {
    return this.bookCommentService.findAllBookComment(bookId)
  }

  @ApiOperation({ summary: 'Создание комментария' })
  @ApiResponse({ status: 201, type: BookComment })
  @Post('/create')
  createComment(@Body() dto: CreateCommentDto): Promise<BookComment> {
    return this.bookCommentService.createComment(dto)
  }

}
