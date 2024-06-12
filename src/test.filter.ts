import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
@Catch(BadRequestException)
export class TestFilter implements ExceptionFilter {
  /** 
  @Inject(AppService)
  private appService: AppService;
  */
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    response.status(400).json({
      statusCode: 400,
      message: 'test:' + exception.message,
    });
  }
}
