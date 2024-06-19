import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
  HttpStatus,
} from '@nestjs/common';
import {
  Observable,
  catchError,
  pipe,
  TimeoutError,
  timeout,
  throwError,
} from 'rxjs';

@Injectable()
export class CatchErrorRxjsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(3000),
      catchError((err) => {
        // 处理错误
        if (err instanceof TimeoutError) {
          console.error(err);
          // return throwError(() => new RequestTimeoutException());
          return throwError(
            () => new HttpException('请求超时', HttpStatus.FOUND),
          );
        }

        return throwError(() => err);
      }),
    );
  }
}
