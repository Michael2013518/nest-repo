import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用express-session中间件，设置session
  app.use(
    session({
      secret: 'michaelsecret', //密钥，用于对sessionid进行加密
      resave: false, //是否强制重新保存session，session内容有变化时重新保存
      saveUninitialized: false, //是否初始化一个session对象
    }),
  );
  await app.listen(3000);
}
bootstrap();
