import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { CccService } from './ccc.service';
import { DddService } from './ddd.service';

@Injectable()
export class AppService {
  constructor(private cccServive: CccService, private dddService: DddService) {}
  getHello(): string {
    //return 'Hello World!' + this.cccServive.ccc() + this.dddService.ddd() + '!';
    return 'Hello World!';
  }
}
