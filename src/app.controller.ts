import {
  Controller,
  Get,
  HttpStatus,
  ParseIntPipe,
  Query,
  HttpException,
  ParseFloatPipe,
  ParseBoolPipe,
  ParseArrayPipe,
  ParseEnumPipe,
  Param,
  DefaultValuePipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ValidatePipe } from './validate.pipe';

export enum gg {
  AAA = '3333',
  BBB = '4444',
  CCC = '5555',
  DDD = '6666',
  EEE = '7777',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Query(
      'num',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_FOUND,
        exceptionFactory(msg) {
          console.log(msg);
          throw new HttpException('num' + ' ' + msg, HttpStatus.NOT_FOUND);
        },
      }),
    )
    num: string,
  ): string {
    return num + 1;
    // return this.appService.getHello();
  }

  @Get('aaa')
  aaa(@Query('cc', ParseFloatPipe) cc: string) {
    return cc + 10;
  }

  @Get('bbb')
  bbb(@Query('cc', ParseBoolPipe) cc: string) {
    return typeof cc;
  }
  @Get('ccc')
  ccc(
    @Query('cc', new ParseArrayPipe({ items: Number, separator: ',' }))
    cc: Array<number>,
  ) {
    return cc.reduce((totle, item) => totle + item, 0);
  }

  @Get('ddd/:enum')
  ddd(@Param('enum', new ParseEnumPipe(gg)) e: gg) {
    return e;
  }

  @Get('eee')
  eee(
    @Query('c', new DefaultValuePipe('aaa')) c: string,
    @Query('b', ValidatePipe) b: string,
  ) {
    return c;
  }
}
