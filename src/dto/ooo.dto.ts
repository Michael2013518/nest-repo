import { IsInt, Length, Min, Max, IsEmail, IsFQDN } from 'class-validator';

export class Ooo {
  @Length(2, 10, {
    message({ targetName, property, value, constraints }) {
      return `${targetName} 类的 ${property} 属性的值 ${value} 不满足约束: ${constraints}`;
    },
  })
  name: string;
  @IsInt()
  @Min(0)
  @Max(100)
  age: number;
  sex: boolean;
  @IsEmail()
  email: string;
  hobby: Array<string>;
  @IsFQDN() //必须是域名
  site: string;
}
