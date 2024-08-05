import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city/entities/city.entity';
import { ArticleModule } from './article/article.module';
import { Article } from './article/entities/article.entity';
import * as path from 'path';
import config from './config';
import config2 from './ymlConfig';
import { createClient } from 'redis';
@Module({
  imports: [
    CityModule,
    ConfigModule.forRoot({
      // 配置模块
      isGlobal: true,
      envFilePath: [
        path.join(process.cwd(), '.prod.env'),
        path.join(process.cwd(), '.env'),
      ],
      load: [config2, config],
    }),
    TypeOrmModule.forRoot({
      //mysql
      type: 'mysql',
      host: 'localhost',
      port: 3360,
      username: 'root',
      password: 'root',
      database: 'tree_test',
      entities: [City, Article],
      synchronize: false,
      logging: true,
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    ArticleModule,
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
