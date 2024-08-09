import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Permission } from './user/entities/permission.entity';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { RedisModule } from './redis/redis.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3360,
      username: 'root',
      password: 'root',
      database: 'acl_db',
      synchronize: true,
      logging: true,
      entities: [User, Permission],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password', // for mysql 8
      },
    }),
    AaaModule,
    BbbModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
