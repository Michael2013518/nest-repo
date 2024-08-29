import { Injectable, Inject } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EmailService } from '../../email/email.service';
@Injectable()
export class SendEmailListener {
  @Inject(EmailService)
  private emailService: EmailService;
  @OnEvent('user.register')
  async hadleUserRegister(data) {
    console.log('user.register', data);
    await this.emailService.sendMail({
      to: data.email,
      subject: `Welcome ${data.username} to our platform`,
      html: 'Welcome to our platform',
    });
  }
}
