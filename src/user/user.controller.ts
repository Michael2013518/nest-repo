import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnauthorizedException,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Inject(JwtService)
  private jwtService: JwtService;
  @Post('login')
  login(@Body() userLogin: UserLoginDto) {
    if (userLogin.username !== 'michael' || userLogin.password !== '123456') {
      throw new BadRequestException('用户名或密码错误');
    }
    const token = this.jwtService.sign(
      {
        username: userLogin.username,
      },
      {
        expiresIn: '7d',
      },
    );
    return { token };
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
