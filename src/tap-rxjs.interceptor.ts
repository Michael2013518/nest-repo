import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TapRxjsInterceptor implements NestInterceptor {
  private logger = new Logger(TapRxjsInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        this.logger.log(`logger something ${data}`);
      }),
    );
  }
}
