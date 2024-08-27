import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule, SchedulerRegistry } from '@nestjs/schedule';
import { TaskService } from './task.service';
import { TestCronModuleModule } from './test-cron-module/test-cron-module.module';
import { CronJob } from 'cron';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TestCronModuleModule, // 引入定时任务模块
  ],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  onApplicationBootstrap() {
    // cron job
    const cronJobs = this.schedulerRegistry.getCronJobs();
    cronJobs.forEach((job, key) => {
      job.stop();
      this.schedulerRegistry.deleteCronJob(key);
    });
    // interval job
    const intervals = this.schedulerRegistry.getIntervals();
    intervals.forEach((item) => {
      const interval = this.schedulerRegistry.getInterval(item);
      clearInterval(interval);
      this.schedulerRegistry.deleteInterval(item);
    });

    const timeouts = this.schedulerRegistry.getTimeouts();
    timeouts.forEach((item) => {
      const timeout = this.schedulerRegistry.getTimeout(item);
      clearTimeout(timeout);
      this.schedulerRegistry.deleteTimeout(item);
    });
    console.log('cron job:', this.schedulerRegistry.getCronJobs());
    console.log('interval job:', this.schedulerRegistry.getIntervals());
    console.log('timeout job:', this.schedulerRegistry.getTimeouts());

    const job = new CronJob('*/5 * * * * *', () => {
      console.log('cron job is running');
    });
    this.schedulerRegistry.addCronJob('myCronJob', job);
    job.start();

    const interval = setInterval(() => {
      console.log('interval job is running');
    }, 3000);
    this.schedulerRegistry.addInterval('myIntervalJob', interval);

    const timeout = setTimeout(() => {
      console.log('timeout job is running');
    }, 5000);
    this.schedulerRegistry.addTimeout('myTimeoutJob', timeout);
  }
}
