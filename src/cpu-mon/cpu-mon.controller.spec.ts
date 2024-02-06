import { Test, TestingModule } from '@nestjs/testing';
import { CpuMonController } from './cpu-mon.controller';

describe('CpuMonController', () => {
  let controller: CpuMonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CpuMonController],
    }).compile();

    controller = module.get<CpuMonController>(CpuMonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
