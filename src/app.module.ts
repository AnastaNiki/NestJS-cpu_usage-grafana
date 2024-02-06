import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CpuMonModule } from './cpu-mon/cpu-mon.module';

@Module({
  imports: [CpuMonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
