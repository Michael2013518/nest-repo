import { IsNotEmpty, Length } from 'class-validator';
export class UserLoginDto {
  @IsNotEmpty({
    message: '用户名不能为空',
  }) // 非空验证
  @Length(2, 50, {
    message: '用户名长度在3到50之间',
  }) // 长度验证
  username: string;

  @IsNotEmpty({
    message: '密码不能为空',
  }) // 非空验证
  @Length(3, 50, {
    message: '密码长度在3到50之间',
  }) // 长度验证
  password: string;
}
