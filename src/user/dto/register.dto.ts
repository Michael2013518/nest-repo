import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';
export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 30, { message: '昵称长度为6到30个字符' })
  @Matches(/^[a-zA-Z0-9#$%_-]+$/, {
    message: '用户名只能是字母、数字或者 #、$、%、_、- 这些字符',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 30, { message: '密码长度为6到30个字符' })
  password: string;
}
