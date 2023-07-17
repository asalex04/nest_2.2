import { Module } from '@nestjs/common'
import { getModelToken, MongooseModule } from '@nestjs/mongoose'
import { BooksController } from './books.controller'
import { BooksService } from './books.service'
import { Book, BookSchema } from './schemas/book.schema'

@Module({
  imports: [MongooseModule.forFeature([
    { name: Book.name, schema: BookSchema }
  ])],
  controllers: [BooksController],
  providers: [
    BooksService,
    {
      provide: getModelToken(Book.name),
      useValue: BookSchema,
    }
  ],
  exports: [BooksService]
})
export class BooksModule {}
