import { Module, forwardRef } from '@nestjs/common';
import { BbbModule } from '../bbb/bbb.module';
@Module({
  imports: [forwardRef(() => BbbModule)], // 循环依赖
})
export class AaaModule {}
