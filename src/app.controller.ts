import {
  Controller,
  Get,
  Post,
  Inject,
  Optional,
  UseFilters,
  HttpStatus,
  HttpException,
  Param,
  Query,
  Body,
  Headers,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ParseIntPipe,
  SetMetadata,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './aaa.filter';
import { AaaGuard } from './aaa.guard';
import { AaaInterceptor } from './aaa.interceptor';
import { AaaPipe } from './aaa.pipe';
import { AaaDto } from './aaa.dto';

@Controller()
@SetMetadata('roles', ['user'])
export class AppController {
  // 构造器注入
  constructor(private readonly appService: AppService) {}
  // 属性注入
  @Inject(AppService)
  private appService2: AppService;

  // 可选注入
  // @Optional()
  @Inject('michael')
  private michael: Record<string, any>;

  @Get()
  @UseFilters(AaaFilter)
  @UseGuards(AaaGuard)
  @UseInterceptors(AaaInterceptor)
  @UsePipes(AaaPipe)
  getHello(
    @Query('id', ParseIntPipe) id: string,
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, string>,
  ): string {
    //throw new HttpException('异常请求', HttpStatus.BAD_REQUEST);
    console.log('accept', accept);
    console.log('headers', headers);
    return this.appService.getHello() + ',' + this.michael.name;
  }
  @SetMetadata('roles', ['admin'])
  @UseGuards(AaaGuard)
  @Post('/bbb')
  getHello2(
    @Body() aaa: AaaDto,
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, string>,
  ) {
    console.log(aaa);
    console.log('accept', accept);
    console.log('headers', headers);
    return 'hello';
  }
}
