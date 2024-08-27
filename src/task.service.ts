import { Injectable, Inject } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { TestCronModuleService } from './test-cron-module/test-cron-module.service';

@Injectable()
export class TaskService {
  @Inject(TestCronModuleService)
  private testCronModuleService: TestCronModuleService;

  @Cron(CronExpression.EVERY_5_SECONDS, {
    name: 'task1',
    timeZone: 'Asia/shanghai',
  })
  handleCron() {
    console.log('task executed', this.testCronModuleService.findAll());
  }

  @Interval('task2', 5000)
  task2() {
    console.log('task2 executed');
  }

  @Timeout('task3', 3000)
  task3() {
    console.log('task3 executed');
  }
}
