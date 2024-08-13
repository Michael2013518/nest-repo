import { Controller, Get, Post, Req, UseGuards, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { IsPublic } from './is-public.decorator';

interface JwtUserData {
  userId: string;
  username: string;
}
declare module 'express' {
  interface Request {
    user: JwtUserData;
  }
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @IsPublic()
  async login(@Req() req: Request) {
    //console.log(req);
    console.log(req.user);
    const token = await this.jwtService.signAsync(
      {
        userId: req.user.userId,
        username: req.user.username,
      },
      {
        expiresIn: '0.5h',
      },
    );
    return { user: req.user, token };
  }
  @Get('list')
  @UseGuards(AuthGuard('jwt'))
  @IsPublic()
  getList(@Req() req: Request) {
    console.log(req.user);
    return ['111', '222', '333', '444'];
  }

  @Get('aaa')
  @IsPublic()
  getAaa() {
    return 'aaa';
  }
  @Get('bbb')
  getBbb() {
    return 'bbb';
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
