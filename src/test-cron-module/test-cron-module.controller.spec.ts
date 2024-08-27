import { Test, TestingModule } from '@nestjs/testing';
import { TestCronModuleController } from './test-cron-module.controller';
import { TestCronModuleService } from './test-cron-module.service';

describe('TestCronModuleController', () => {
  let controller: TestCronModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestCronModuleController],
      providers: [TestCronModuleService],
    }).compile();

    controller = module.get<TestCronModuleController>(TestCronModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
