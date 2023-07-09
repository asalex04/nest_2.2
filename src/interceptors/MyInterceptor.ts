import {
  CallHandler,
  Injectable,
  NestInterceptor,
  ExecutionContext,
  InternalServerErrorException
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        tap((data) => {
          console.log({
            status: "success",
            data: data
          })
        }),
        catchError(err => {
          console.log({
            status: "fail",
            data: err
          });
          return throwError(new InternalServerErrorException());
        })
      );
  }

}