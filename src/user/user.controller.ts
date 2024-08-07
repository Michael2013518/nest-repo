import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Inject,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Get()
  findUserAll() {
    return 'OK';
  }

  // 登录
  @Post('login')
  async login(
    @Body(ValidationPipe) user: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const checkUser = await this.userService.login(user);
    if (checkUser) {
      const token = this.jwtService.sign({
        id: checkUser.id,
        username: checkUser.username,
      });
      response.setHeader('token', token);
      return '登录成功';
    } else {
      return '登录失败';
    }
  }
  // 注册
  @Post('register')
  register(@Body(ValidationPipe) registerDto: RegisterDto) {
    return this.userService.register(registerDto);
  }
}
