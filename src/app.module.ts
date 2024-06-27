import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { Logger2Module } from './logger2/logger2.module';

@Module({
  imports: [
    LoggerModule,
    // Logger2Module.register({
    //   name: 'michael',
    //   age: 38,
    //   sex: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
