import { Module } from '@nestjs/common';
import { CpuMonService } from './cpu-mon.service';
// import { CpuMonResolver } from './cpu-mon.resolver';
import { CpuMonController } from './cpu-mon.controller';

@Module({
  // providers: [CpuMonResolver, CpuMonService],
  providers: [CpuMonService],
  controllers: [CpuMonController],
})
export class CpuMonModule {}
