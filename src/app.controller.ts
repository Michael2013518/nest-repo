import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaInterceptor } from './aaa.interceptor';
import { MapRxjsInterceptor } from './map-rxjs.interceptor';
import { TapRxjsInterceptor } from './tap-rxjs.interceptor';
import { CatchErrorRxjsInterceptor } from './catch-error-rxjs.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(AaaInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  @UseInterceptors(MapRxjsInterceptor)
  aaa() {
    return 'aaa';
  }

  @Get('bbb')
  @UseInterceptors(TapRxjsInterceptor)
  bbb() {
    return 'bbb';
  }

  @Get('ddd')
  @UseInterceptors(CatchErrorRxjsInterceptor)
  async ddd() {
    //await new Promise((resolve) => setTimeout(resolve, 4000));
    return 'ddd';
  }
}
