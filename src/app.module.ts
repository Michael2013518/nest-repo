import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3360,
      username: 'root',
      password: 'root',
      database: 'user_login',
      entities: [User],
      synchronize: true, // 自动创建表
      logging: true,
      poolSize: 10, // 连接池大小
      connectorPackage: 'mysql2',
      extra: {
        authPlugins: ['sha256_password'],
      },
    }),
    JwtModule.register({
      global: true,
      secret: 'michaelCHN',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
