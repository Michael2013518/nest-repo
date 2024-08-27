import { Module } from '@nestjs/common';
import { TestCronModuleService } from './test-cron-module.service';
import { TestCronModuleController } from './test-cron-module.controller';

@Module({
  controllers: [TestCronModuleController],
  providers: [TestCronModuleService],
  exports: [TestCronModuleService],
})
export class TestCronModuleModule {}
