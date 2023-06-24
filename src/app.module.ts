import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { BooksModule } from './books/books.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    BooksModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
