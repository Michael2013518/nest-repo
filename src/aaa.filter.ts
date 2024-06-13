import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
@Catch(HttpException)
export class AaaFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    console.log('AaaFilter');
    // response.status(exception.getStatus()).json({
    //   statusCode: exception.getStatus(),
    //   timestamp: new Date().toISOString(),
    //   path: host.switchToHttp().getRequest().url,
    //   msg: exception.message, // 异常信息
    // });
  }
}
