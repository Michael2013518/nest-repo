import { Injectable, Inject } from '@nestjs/common';
import { RedisClientType } from 'redis';
@Injectable()
export class RedisService {
  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType;

  async getHash(key: string) {
    return await this.redisClient.hGetAll(key);
  }

  async setHash(key: string, objData: Record<string, any>, ttl?: number) {
    for (const name in objData) {
      await this.redisClient.hSet(key, name, objData[name]);
    }
    if (ttl) {
      await this.redisClient.expire(key, ttl);
    }
  }
}
