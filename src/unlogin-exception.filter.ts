import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

export class UnloginException {
  message: string;
  constructor(message?: string) {
    this.message = message;
  }
}

@Catch()
export class UnloginExceptionFilter implements ExceptionFilter {
  catch(exception: UnloginException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    response
      .status(HttpStatus.UNAUTHORIZED)
      .json({
        code: HttpStatus.UNAUTHORIZED,
        message: exception.message,
        data: exception.message || '用户未登录',
      })
      .end();
  }
}
