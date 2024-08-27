import { Test, TestingModule } from '@nestjs/testing';
import { TestCronModuleService } from './test-cron-module.service';

describe('TestCronModuleService', () => {
  let service: TestCronModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestCronModuleService],
    }).compile();

    service = module.get<TestCronModuleService>(TestCronModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
