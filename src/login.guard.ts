import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Role } from './user/entities/role.entity';
import { Reflector } from '@nestjs/core';

declare module 'express' {
  interface Request {
    user: {
      username: string;
      roles: Role[];
    };
  }
}
@Injectable()
export class LoginGuard implements CanActivate {
  @Inject(JwtService)
  private jwtService: JwtService;

  @Inject(Reflector)
  private reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const requreLogin = this.reflector.getAllAndOverride('require-login', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requreLogin) {
      return true;
    }
    const authorization = request.headers.authorization;
    console.log('authorization', authorization);
    if (!authorization) {
      throw new UnauthorizedException('用户未登录');
    }
    try {
      const token = authorization.split(' ')[1];
      const data = this.jwtService.verify(token);
      request.user = data.user;
      return true;
    } catch (error) {}
    throw new UnauthorizedException('token失效，请先登录');
  }
}
