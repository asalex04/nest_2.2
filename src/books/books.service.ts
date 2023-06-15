import { Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'
import Book from './models/book.models'
import { CreateBookDto } from './dto/createBook.dto'

@Injectable()
export class BooksService {
  private readonly books: Book[] = []

  async getAllBooks() {
    return this.books
  }

  async createBook(dto: CreateBookDto) {
    const id = uuidv4()
    this.books.push({ ...dto, id })
  }
}
