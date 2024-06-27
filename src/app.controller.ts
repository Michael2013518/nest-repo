import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private logger = new Logger();
  @Get()
  getHello(): string {
    this.logger.debug('bbb', AppController.name);
    this.logger.error('aaa', AppController.name);
    this.logger.log('ccc', AppController.name);
    this.logger.verbose('ddd', AppController.name);
    this.logger.warn('eee', AppController.name);
    return this.appService.getHello();
  }
}
