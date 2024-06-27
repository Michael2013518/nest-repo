import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from './CustomLogger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false,
    //logger: ['warn', 'error', 'log', 'debug'],
    // logger: new CustomLogger(),
  });
  await app.listen(3000);
}
bootstrap();
