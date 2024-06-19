import { Controller, Get, Next } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('hello');
    return this.appService.getHello();
  }
  @Get('hello1')
  getHello1(): string {
    console.log('hello1');
    return this.appService.getHello();
  }
  @Get('hello2')
  getHello2(): string {
    console.log('hello2');
    return this.appService.getHello();
  }
  @Get('word1')
  word1(): string {
    console.log('word1');
    return this.appService.getHello();
  }
  @Get('word2')
  word2(): string {
    console.log('word2');
    return this.appService.getHello();
  }

  @Get('bbb')
  b1(@Next() next) {
    next();
    return 'b1';
  }

  @Get('bbb')
  b2() {
    return 'b2';
  }
}
