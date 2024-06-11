import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log.middleware';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: LoginGuard,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TimeInterceptor,
    // },
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidatePipe,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 路由级别中间件
    consumer.apply(LogMiddleware).forRoutes('aaa*');
  }
}
