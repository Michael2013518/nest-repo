import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthService {
  @Inject(UserService)
  private userService: UserService;

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findOne(username);
    if (!user) {
      throw new UnauthorizedException('用户不存在');
    }
    if (user.password !== pass) {
      throw new UnauthorizedException('密码错误');
    }
    const { password, ...result } = user;
    return result; // 返回用户信息
  }
}
