import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { SendEmailListener } from './listeners/send-email.listener';
@Module({
  controllers: [NotificationController],
  providers: [NotificationService, SendEmailListener],
})
export class NotificationModule {}
