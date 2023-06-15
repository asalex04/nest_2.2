import { Body, Controller, Get, Post } from '@nestjs/common'
import { BooksService } from './books.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import Book from './models/book.models'
import { CreateBookDto } from './dto/createBook.dto'

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @ApiOperation({ summary: 'Все книги' })
  @ApiResponse({ status: 200, type: Book })
  @Get('/')
  getAllBooks() {
    return this.booksService.getAllBooks()
  }

  @ApiOperation({ summary: 'Создание книги' })
  @ApiResponse({ status: 201, type: Book })
  @Post('/create')
  createBook(@Body() dto: CreateBookDto) {
    return this.booksService.createBook(dto)
  }
}
