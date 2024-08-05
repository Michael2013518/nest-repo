import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { RedisClientType } from 'redis';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(ConfigService)
  private configService: ConfigService;

  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType;
  @Get()
  async getHello() {
    console.log(this.configService.get('aaa'));
    console.log(this.configService.get('db'));
    console.log(this.configService.get('aaa.bbb.ccc'));
    console.log('redis', await this.redisClient.keys('*'));
    return this.appService.getHello();
  }
}
