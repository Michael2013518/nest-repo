import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AaaInterceptor implements NestInterceptor {
  @Inject()
  private reflect: Reflector;
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Aaa Interceptor');
    console.log(this.reflect.get('roles', context.getHandler()));
    return next.handle();
  }
}
