import { Controller, Get } from '@nestjs/common';
import { CpuMonService } from './cpu-mon.service';

@Controller('cpu-mon')
export class CpuMonController {
  constructor(private readonly cpuMonService: CpuMonService) {}

  @Get('cpus')
  printCpus(): Promise<string> {
    return this.cpuMonService.printCpus();
  }

  @Get('la')
  printCpuLa(): Promise<string> {
    return this.cpuMonService.printCpuLa();
  }

  @Get('usage')
  getCpuUsage(): Promise<any> {
    return this.cpuMonService.getCpuUsage();
  }

  
}

