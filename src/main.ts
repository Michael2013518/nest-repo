import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * 全局中间件
   */
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('before', req.url);
    next();
    console.log('after');
  });
  /**
   * 全局守卫
   */
  //app.useGlobalGuards(new LoginGuard());
  /**
   * 作用与所有Controller的拦截器
   */
  //app.useGlobalInterceptors(new TimeInterceptor());
  /**
   * 全局管道
   */
  //app.useGlobalPipes(new ValidatePipe());
  await app.listen(3000);
}
bootstrap();
