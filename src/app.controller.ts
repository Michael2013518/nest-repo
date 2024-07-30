import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(ConfigService)
  private configService: ConfigService;
  @Get()
  getHello(): string {
    console.log(this.configService.get('aaa'));
    console.log(this.configService.get('db'));
    console.log(this.configService.get('aaa.bbb.ccc'));
    return this.appService.getHello();
  }
}
