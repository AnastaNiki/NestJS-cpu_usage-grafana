import { Test, TestingModule } from '@nestjs/testing';
import { CpuMonService } from './cpu-mon.service';

describe('CpuMonService', () => {
  let service: CpuMonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpuMonService],
    }).compile();

    service = module.get<CpuMonService>(CpuMonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
