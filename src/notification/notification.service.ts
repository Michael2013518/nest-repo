import { Injectable, Inject } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { EmailService } from '../email/email.service';
@Injectable()
export class NotificationService {
  @Inject(EmailService)
  private emailService: EmailService;

  // @OnEvent('user.register')
  async hadleUserRegister(data) {
    console.log('user.register', data);
    await this.emailService.sendMail({
      to: data.email,
      subject: `Welcome ${data.username} to our platform`,
      html: 'Welcome to our platform',
    });
  }

  create(createNotificationDto: CreateNotificationDto) {
    return 'This action adds a new notification';
  }

  findAll() {
    return `This action returns all notification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
