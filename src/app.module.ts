import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomExceptionFilter } from './custom-exception-filter.filter';
import { UnloginExceptionFilter } from './unlogin-exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter, // 自定义异常过滤器
    },
    {
      provide: APP_FILTER,
      useClass: UnloginExceptionFilter, // 自定义异常过滤器
    },
  ],
})
export class AppModule {}
