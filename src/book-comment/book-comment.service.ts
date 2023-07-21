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
    return await this.bookCommentModel.find({ bookId })
  }

  async createComment(dto: CreateCommentDto): Promise<BookComment> {
    const newcomment = await new this.bookCommentModel(dto)
    return await newcomment.save()
  }
}
