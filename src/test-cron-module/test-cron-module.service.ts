import { Injectable } from '@nestjs/common';
import { CreateTestCronModuleDto } from './dto/create-test-cron-module.dto';
import { UpdateTestCronModuleDto } from './dto/update-test-cron-module.dto';

@Injectable()
export class TestCronModuleService {
  create(createTestCronModuleDto: CreateTestCronModuleDto) {
    return 'This action adds a new testCronModule';
  }

  findAll() {
    return `This action returns all testCronModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testCronModule`;
  }

  update(id: number, updateTestCronModuleDto: UpdateTestCronModuleDto) {
    return `This action updates a #${id} testCronModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} testCronModule`;
  }
}
