import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import config from './config';
import config2 from './ymlConfig';
import { createClient } from 'redis';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    ConfigModule.forRoot({
      // 配置模块
      isGlobal: true,
      envFilePath: [
        path.join(process.cwd(), '.prod.env'),
        path.join(process.cwd(), '.env'),
      ],
      load: [config2, config],
    }),
    JwtModule.register({
      secret: 'michael',
      signOptions: {
        expiresIn: '7d',
      },
    }),
    /*
    TypeOrmModule.forRoot({
      //mysql
      type: 'mysql',
      host: 'localhost',
      port: 3360,
      username: 'root',
      password: 'root',
      database: 'tree_test',
      entities: [],
      synchronize: false,
      logging: true,
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    */
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'REDIS_CLIENT', // redis
      async useFactory() {
        const client = createClient({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        });
        await client.connect();
        return client;
      },
    },
  ],
})
export class AppModule {}
