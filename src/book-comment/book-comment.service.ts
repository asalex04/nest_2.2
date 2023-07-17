import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { CreateCommentDto } from './interfaces/dto/createComment.dto';
import { BookComment } from './models/bookComment.model';

@Injectable()
export class BookCommentService {
  constructor(
    @InjectModel(BookComment.name) private bookCommentModel: Model<BookComment>,
    @InjectConnection() private connection: Connection
  ) {}

  async findAllBookComment(bookId): Promise<BookComment[]> {
    return this.bookCommentModel.find()
  }

  async createComment(dto: CreateCommentDto): Promise<BookComment> {
    const newcomment = new this.bookCommentModel(dto)
    return newcomment.save()
  }
}
