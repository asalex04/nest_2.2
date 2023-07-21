import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppGateway } from 'src/app/app.gateway';
import { BookCommentController } from './book-comment.controller';
import { BookCommentService } from './book-comment.service';
import { BookComment, BookCommentSchema } from './models/bookComment.model';

@Module({
  controllers: [BookCommentController],
  providers: [
    BookCommentService,
    AppGateway
  ],
  imports: [MongooseModule.forFeature([
    { name: BookComment.name, schema: BookCommentSchema }
  ])],
  exports: [BookCommentService]
})
export class BookCommentModule {}
