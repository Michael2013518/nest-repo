import { Controller, Get, VERSION_NEUTRAL, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: 'api', // 设置路由前缀为 /api
  //version: VERSION_NEUTRAL, // 设置版本号为 1
  version: ['1', '3'],
})
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Version('2')
  @Get()
  findAllV2() {
    return this.appService.getHello() + ' V2';
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
