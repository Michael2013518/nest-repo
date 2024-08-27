import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestCronModuleService } from './test-cron-module.service';
import { CreateTestCronModuleDto } from './dto/create-test-cron-module.dto';
import { UpdateTestCronModuleDto } from './dto/update-test-cron-module.dto';

@Controller('test-cron-module')
export class TestCronModuleController {
  constructor(private readonly testCronModuleService: TestCronModuleService) {}

  @Post()
  create(@Body() createTestCronModuleDto: CreateTestCronModuleDto) {
    return this.testCronModuleService.create(createTestCronModuleDto);
  }

  @Get()
  findAll() {
    return this.testCronModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testCronModuleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestCronModuleDto: UpdateTestCronModuleDto,
  ) {
    return this.testCronModuleService.update(+id, updateTestCronModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testCronModuleService.remove(+id);
  }
}
