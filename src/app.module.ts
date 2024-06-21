import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'validation_options',
      useFactory: () => ({
        a: 1,
        b: 2,
      }),
    },
  ],
})
export class AppModule {}
