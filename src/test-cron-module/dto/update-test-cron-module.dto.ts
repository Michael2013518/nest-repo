import { PartialType } from '@nestjs/swagger';
import { CreateTestCronModuleDto } from './create-test-cron-module.dto';

export class UpdateTestCronModuleDto extends PartialType(CreateTestCronModuleDto) {}
