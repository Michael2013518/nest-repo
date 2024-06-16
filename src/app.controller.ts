import {
  Controller,
  Get,
  SetMetadata,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaInterceptor } from './aaa.interceptor';
import { AaaGuard } from './aaa.guard';
@Controller()
@SetMetadata('roles', ['user']) // 设置元数据
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(AaaInterceptor)
  @UseGuards(AaaGuard)
  @SetMetadata('roles', ['admin']) // 设置元数据
  getHello(): string {
    return this.appService.getHello();
  }
}
