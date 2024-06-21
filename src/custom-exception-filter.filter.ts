import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  BadRequestException,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const statusCode = exception.getStatus();
    const res = exception.getResponse() as { message: string[] };
    response.status(statusCode).json({
      statusCode,
      message: res?.message?.join ? res?.message?.join(',') : exception.message,
      error: 'Bad Request Exception',
      xxx: 'custom message',
    });
  }
}
