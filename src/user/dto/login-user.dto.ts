import { IsNotEmpty, Length } from 'class-validator';
export class LoginUserDto {
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  @Length(3, 20, {
    message: '用户名长度在3到20之间',
  })
  username: string;
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(3, 20, { message: '密码长度在3到20之间' })
  password: string;
}
