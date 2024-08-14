import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // swagger文档配置
  const config = new DocumentBuilder()
    .setTitle('应用接口文档')
    .setDescription(
      '应用接口文档包括用户、角色、权限、菜单、字典、日志、文件等接口',
    )
    .setVersion('1.0')
    .addTag('测试接口')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
