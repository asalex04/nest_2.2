import { Injectable } from '@nestjs/common'
import { InjectConnection, InjectModel } from '@nestjs/mongoose'
import { Connection, Model } from 'mongoose'
import { CreateBookDto } from './interfaces/dto/createBook.dto'
import { UpdateBookDto } from './interfaces/dto/updateBook.dto'
import { Book } from './schemas/book.schema'

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @InjectConnection() private connection: Connection
  ) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.find()
  }

  async createBook(dto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(dto)
    return createdBook.save()
  }
  
  async updateBook(dto: UpdateBookDto, id: string): Promise<Book> {
    return this.bookModel.findByIdAndUpdate({ _id: id}, dto)
  }
  
  async deleteBook(id: string): Promise<void> {
    return this.bookModel.findOneAndDelete({ _id: id })
  }
}
