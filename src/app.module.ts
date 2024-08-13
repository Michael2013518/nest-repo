import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: 'michael9527',
      signOptions: { expiresIn: '60s' }, // 设置token过期时间
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
