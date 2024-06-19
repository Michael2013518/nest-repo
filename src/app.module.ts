import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaMiddleware } from './aaa.middleware';
import { RequestMethod } from '@nestjs/common/enums';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 注册中间件
    consumer
      .apply(AaaMiddleware)
      .forRoutes({ path: 'hello*', method: RequestMethod.GET });
    consumer
      .apply(AaaMiddleware)
      .forRoutes({ path: 'word2', method: RequestMethod.GET });
  }
}
