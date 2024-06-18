import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';

@Module({
  imports: [
    BbbModule.register({
      a: 1,
      b: 2,
    }),
    // CccModule.register({
    //   a: 2,
    //   b: 5,
    //   isGlobal: true,
    // }),
    CccModule.registerAsync({
      useFactory: async () => {
        await 111;
        return {
          a: 3,
          b: 6,
        };
      },
      inject: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
