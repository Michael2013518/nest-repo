import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  transporter: Transporter;
  constructor() {
    this.transporter = createTransport({
      host: 'smtp.qq.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your email',
        pass: 'your password',
      },
    });
  }
  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '系统邮件',
        address: 'your email',
      },
      to,
      subject,
      html,
    });
  }
}
