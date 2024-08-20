import {
  PartialType,
  PickType,
  OmitType,
  // 合并dto类型
  IntersectionType,
} from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
// import { IsEmail } from 'class-validator';
import { CreateAaaDto } from './create-aaa.dto';

export class UpdateAaaDto extends PickType(CreateAaaDto, ['name', 'email']) {
  @IsNotEmpty()
  alias: string;
}
