import { Module, DynamicModule } from '@nestjs/common';
import { MyLogger } from './MyLogger';

@Module({})
export class Logger2Module {
  static register(options: any): DynamicModule {
    return {
      module: Logger2Module,
      providers: [
        MyLogger,
        {
          provide: 'LOG_OPTIONS',
          useValue: options,
        },
      ],
      exports: [MyLogger, 'LOG_OPTIONS'],
    };
  }
}
