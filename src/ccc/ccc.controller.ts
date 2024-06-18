import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CccService } from './ccc.service';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';
import {
  MODULE_OPTIONS_TOKEN,
  CccModuleOptions,
  ASYNC_OPTIONS_TYPE,
} from './ccc.module-notification';

@Controller('ccc')
export class CccController {
  constructor(private readonly cccService: CccService) {}
  @Inject(MODULE_OPTIONS_TOKEN)
  private options: typeof ASYNC_OPTIONS_TYPE;
  @Post()
  create(@Body() createCccDto: CreateCccDto) {
    return this.cccService.create(createCccDto);
  }

  @Get()
  findAll() {
    return this.options;
    // return this.cccService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cccService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCccDto: UpdateCccDto) {
    return this.cccService.update(+id, updateCccDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cccService.remove(+id);
  }
}
