import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { BooksModule } from './books/books.module'
import { BookCommentModule } from './book-comment/book-comment.module'
import { AppGateway } from './app/app.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    BooksModule,
    BookCommentModule
  ],
  controllers: [],
  providers: [AppGateway]
})
export class AppModule {}
