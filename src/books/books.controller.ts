import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { BooksService } from './books.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Book, BookDocument } from './schemas/book.schema'
import { IParamId } from './interfaces/param_id'
import { CreateBookDto } from './interfaces/dto/createBook.dto'
import { UpdateBookDto } from './interfaces/dto/updateBook.dto'

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @ApiOperation({ summary: 'Все книги' })
  @ApiResponse({ status: 200, type: Book })
  @Get('/')
  getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks()
  }

  @ApiOperation({ summary: 'Создание книги' })
  @ApiResponse({ status: 201, type: Book })
  @Post('/create')
  createBook(@Body() dto: CreateBookDto): Promise<Book> {
    return this.booksService.createBook(dto)
  }


  @ApiOperation({ summary: 'Изменение книги' })
  @ApiResponse({ status: 200, type: Book })
  @Put('/update/:id')
  updateBook(
    @Body() dto: UpdateBookDto,
    @Param() { id }: IParamId
  ) {
    return this.booksService.updateBook(dto, id)
  }


  @ApiOperation({ summary: 'Удаление книги' })
  @ApiResponse({ status: 200 })
  @Delete('/delete/:id')
  deleteBook(@Param() { id }: IParamId) {
    return this.booksService.deleteBook(id)
  }
}
