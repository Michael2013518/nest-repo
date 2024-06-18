import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CccService } from './ccc.service';

@Injectable()
export class DddService {
  @Inject(forwardRef(() => CccService))
  private readonly cccService: CccService;

  ddd() {
    return 'DddService' + this.cccService.ccc(); // 这里会报错，因为CccService没有提供@Injectable()装饰器;
  }
}
