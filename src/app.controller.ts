import {
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  UseFilters,
  ValidationPipe,
  Query,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

@Controller()
// @UseInterceptors(TimeInterceptor)
// @UsePipes(ValidatePipe)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('handler...');
    return this.appService.getHello();
  }
  // 路由守卫
  @Get('aaa')
  @UseGuards(LoginGuard)
  aaa(): string {
    console.log('aaa');
    return 'aaa';
  }
  @Get('bbb')
  @UseInterceptors(TimeInterceptor)
  bbb(): string {
    console.log('bbb');
    return 'bbb';
  }

  @Get('ccc')
  @UseFilters(TestFilter)
  // @UsePipes(ValidationPipe)
  ccc(@Query('num', ValidatePipe) num: number) {
    return num + 1;
  }
}
