import { Module } from '@nestjs/common';
import { GithubStrategy } from './auth.strategy';
import { GoogleStrategy } from './google.strategy';
@Module({
  providers: [GithubStrategy, GoogleStrategy],
})
export class AuthModule {}
