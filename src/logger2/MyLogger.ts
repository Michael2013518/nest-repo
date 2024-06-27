import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLogger extends ConsoleLogger {
  // 重写log方法
  log(message: any, context?: string) {
    super.log(message, context);
    // 在这里添加自定义逻辑
    console.log(`Log [${context}]`, message);
    console.log('----');
  }
}
