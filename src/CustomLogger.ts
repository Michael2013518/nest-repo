import { LoggerService, ConsoleLogger, Inject } from '@nestjs/common';

export class CustomLogger extends ConsoleLogger {
  @Inject('LOG_OPTIONS')
  public options: Record<string, any>;

  log(message, context) {
    console.log('--start--');
    console.log(this.options);
    console.log(`${context}`, message);
    console.log('--end--');
  }
}
