import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { UserService } from './user.service';
import { Permission } from './entities/permission.entity';
import { Reflector } from '@nestjs/core';
@Injectable()
export class PermissionGuard implements CanActivate {
  @Inject(UserService)
  private userService: UserService;

  @Inject(Reflector)
  private reflector: Reflector;
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    console.log('request', request.user);
    if (!request.user) {
      return true;
    }
    const roles = await this.userService.findRoleByIds(
      request.user.roles.map((role) => role.id),
    );
    const permissions: Permission[] = roles.reduce((total, current) => {
      total.push(...current.permissions);
      return total;
    }, []);
    console.log('permissions', permissions);

    const requirePermissions = this.reflector.getAllAndOverride(
      'require-permission',
      [context.getHandler(), context.getClass()],
    );
    console.log('requirePermission', requirePermissions);
    for (let i = 0; i < requirePermissions.length; i++) {
      const requirePermission = requirePermissions[i];
      const found = permissions.find(
        (permission) => permission.name === requirePermission,
      );
      if (!found) {
        throw new UnauthorizedException('您没有访问该接口的权限');
      }
    }
    return true;
  }
}
