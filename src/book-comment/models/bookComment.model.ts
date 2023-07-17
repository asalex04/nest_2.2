import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type BookCommentDocument = BookComment & Document;

@Schema()
export class BookComment {
  @Prop({ required: true })
  public id: number;

  @Prop()
  public bookId: number;

  @Prop()
  public comment: string;
}

export const BookSchema = SchemaFactory.createForClass(BookComment);