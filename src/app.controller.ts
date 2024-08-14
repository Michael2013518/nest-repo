import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  @UseGuards(AuthGuard('github'))
  async login() {
    return 'ok';
  }

  @Get('callback')
  @UseGuards(AuthGuard('github'))
  githubCallback(@Req() req) {
    console.log(req.user);
    return this.appService.findUserByGihubId(req.user.id);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    return 'ok';
  }

  @Get('callback/google')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req) {
    console.log(req.user);
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'User info from google',
      user: req.user,
    };
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
