import { Controller, Get, SetMetadata, UseGuards, Headers, Query, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { MyHeaders } from './myheaders.decorator';
import { MyQuery } from './my-query.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  @Aaa('admin')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('hello2', 'admin')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('hello5')
  getHello5(@Headers('Accept') header1: string, @MyHeaders('Accept') header2: string) {
    console.log('header1', header1)
    console.log('header2', header2)
  }

  @Get('hello6')
  getHello6(@Query('aaa', new ParseIntPipe()) aaa: string,@MyQuery('bbb', new ParseIntPipe()) bbb:string) {
    console.log('aaa', aaa+1)
    console.log('bbb', bbb + 2)
    return 'custom query decorator'
  }
}
