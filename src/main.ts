import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { Request } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // header中携带version信息
  /*
  app.enableVersioning({
    type: VersioningType.HEADER,
    header: 'version',
  });
  */
  // Accept头信息逗号分隔vv=1
  /*
  app.enableVersioning({
    type: VersioningType.MEDIA_TYPE,
    key: 'vv=',
  });
  */
  //url地址v1前缀
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // 自定义版本提取器
  /*
  const extractor = (request: Request) => {
    if (request.headers['disable-custom']) {
      return '';
    }
    return request.url.includes('v') ? '2' : '1';
  };
  app.enableVersioning({
    type: VersioningType.CUSTOM,
    extractor,
  });
  */
  await app.listen(3000);
}
bootstrap();
