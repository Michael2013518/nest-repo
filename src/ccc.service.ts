import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { DddService } from './ddd.service';

@Injectable()
export class CccService {
  @Inject(forwardRef(() => DddService))
  private readonly dddService: DddService;

  ccc() {
    return 'ccc' + this.dddService.ddd(); // 这里会报错，因为dddService还没有初始化;
  }
}
