import { Injectable, Inject } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';
@Injectable()
export class SessionService {
  @Inject(RedisService)
  private redisService: RedisService;

  async setSession(
    sid: string,
    data: Record<string, any>,
    ttl: number = 30 * 60,
  ) {
    if (!sid) {
      sid = this.generateSid();
    }
    await this.redisService.setHash(`sid_${sid}`, data, ttl);
    return sid;
  }
  async getSession<SessionType extends Record<string, any>>(
    sid: string,
  ): Promise<SessionType>;
  async getSession(sid: string) {
    return await this.redisService.getHash(`sid_${sid}`);
  }
  //生成随机数
  generateSid() {
    return Math.random().toString().slice(2, 12);
  }
}
