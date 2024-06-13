import {
  Controller,
  Get,
  SetMetadata,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaException } from './aaaException';
import { AaaFilter } from './aaa.filter';
import { AaaGuard } from './aaa.guard';
import { Roles } from './roles.decorator';
import { Role } from './role';

@Controller()
//@SetMetadata('roles', [Role.Admin])
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AaaGuard)
  @UseFilters(AaaFilter)
  @Roles(Role.Admin)
  getHello(): string {
    //throw new AaaException('aaa', 'bbb');
    return this.appService.getHello();
  }
}
