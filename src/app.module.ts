import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 声明全局模块
//@Global()
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'michael',
      useFactory() {
        return {
          name: 'michael chueng',
        };
      },
    },
  ],
})
export class AppModule {}
