import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse
} from '@nestjs/websockets';
import { from, map, Observable } from 'rxjs';
import { Server, Socket } from 'socket.io';
import { CreateCommentDto } from 'src/book-comment/interfaces/dto/createComment.dto';
import { BookCommentService } from '../book-comment/book-comment.service'
import { BookComment } from '../book-comment/models/bookComment.model';

@WebSocketGateway({ cors: true })
export class AppGateway {
  constructor(private bookCommentService: BookCommentService) {
  }
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('create')
  async addComment(client: any, payload: CreateCommentDto): Promise<void> {
    await this.bookCommentService.createComment(payload)
  }

  @SubscribeMessage('comments')
  async getAllComments(client: any, payload: number): Promise<BookComment[]> {
    const comments = await this.bookCommentService.findAllBookComment(payload)
    this.server.emit('recMessage', comments)
    return comments
  }

}