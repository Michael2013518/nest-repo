import {
  Controller,
  Get,
  Inject,
  Session,
  Res,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { RedisClientType } from 'redis';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(ConfigService)
  private configService: ConfigService;

  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType;

  @Inject(JwtService)
  private jwtService: JwtService;

  @Get('session')
  getSession(@Session() session) {
    console.log(session);
    session.count = session.count ? session.count + 1 : 1;
    return session.count;
  }

  @Get('jwt')
  getJwt(
    @Headers('Authorization') authorization: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    if (authorization) {
      try {
        const token = authorization.split(' ')[1];
        const data = this.jwtService.verify(token);
        const newToken = this.jwtService.sign({
          count: data.count + 1,
        });
        response.setHeader('token', newToken);
        return data.count + 1;
      } catch (e) {
        console.log(e);
        throw new UnauthorizedException();
      }
    } else {
      const token = this.jwtService.sign({
        count: 1,
      });
      response.setHeader('token', token);
      return 1;
    }
  }
  @Get()
  async getHello() {
    console.log(this.configService.get('aaa'));
    console.log(this.configService.get('db'));
    console.log(this.configService.get('aaa.bbb.ccc'));
    console.log('redis', await this.redisClient.keys('*'));
    return this.appService.getHello();
  }
}
