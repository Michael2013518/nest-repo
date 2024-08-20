import {
  IsNotEmpty, //'', null, undefined
  IsDefined, // undefined, null
  IsOptional,
  IsIn,
  IsDate,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsPositive,
  IsNegative,
  IsDivisibleBy,
  IsDateString,
  Contains,
  IsNumber,
  IsEmail,
  IsBoolean,
  MinLength,
  MaxLength,
} from 'class-validator';
export class CreateAaaDto {
  @IsNotEmpty({
    message: '姓名为必填选项',
  })
  @MinLength(4, {
    message: '姓名长度不能小于4位',
  })
  @MaxLength(20, {
    message: '姓名长度不能大于20位',
  })
  name: string;

  @IsNotEmpty({
    message: '年龄为必填选项',
  })
  @IsNumber({}, { message: '年龄为数字' })
  age: number;
  @IsNotEmpty({ message: '性别为必填选项' })
  @IsBoolean({ message: '性别为布尔值' })
  sex: boolean;
  @IsNotEmpty({ message: '邮箱为必填选项' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  email: string;

  hoobies: string[];
}
