import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
