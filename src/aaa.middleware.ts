import { Injectable, NestMiddleware, Inject } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppService } from './app.service';
@Injectable()
export class AaaMiddleware implements NestMiddleware {
  @Inject(AppService)
  private readonly appService: AppService;
  use(req: Request, res: Response, next: NextFunction) {
    console.log('middleware aaa before:');
    console.log('---' + this.appService.getHello());
    next();
    console.log('middleware aaa after:');
  }
}
