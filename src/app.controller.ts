import {
  BadGatewayException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CustomExceptionFilter } from './custom-exception-filter.filter';
import { UnloginException } from './unlogin-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(new CustomExceptionFilter())
  getHello(): string {
    //throw new HttpException('请求错误信息!', HttpStatus.BAD_REQUEST);
    //throw new BadGatewayException('请求错误信息!');
    throw new UnloginException();
    return this.appService.getHello();
  }
}
