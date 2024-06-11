import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';
import { LoginGuard } from './login.guard';
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
  await app.listen(3000);
}
bootstrap();
