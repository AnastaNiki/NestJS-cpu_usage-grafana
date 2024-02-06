import { Injectable } from '@nestjs/common';

@Injectable()
export class CpuMonService {

  async printCpus(): Promise<string> {
    const os = await require('node:os');
    const cpus = await os.cpus()
    return  JSON.stringify(cpus)
  }

  async printCpuLa(): Promise<string> {
    const os = await require('node:os');
    const cpus = await os.cpus();
    const la = os.loadavg();

    const cores =  Array.isArray(cpus) ? os.cpus().length : null
    console.log(Math.min(Math.floor(la[0] * 100 / cores), 100))
    return JSON.stringify({      
      "load1": la[0],
      "load5": la[1],
      "load15": la[2],
      "cores": Array.isArray(cpus) ? os.cpus().length : null,
      "utilization": Math.min(Math.floor(la[0] * 100 / cores), 100)
    })
  }
  
  async getCpuUsage(sampleTime = 100) {
    const os = require("os");
    return new Promise((resolve, reject) => {
      try {
        const first = os.cpus().map(cpu => cpu.times);
        setTimeout(() => {
          try {
            const second = os.cpus().map(cpu => cpu.times);
            setTimeout(() => {
              try {
                const third = os.cpus().map(cpu => cpu.times);
  
                const result = {}
                const usages = []
                const cores = {}
                
                for (let i = 0; i < first.length; i++) {
                  const first_idle = first[i].idle;
                  const first_total = first[i].idle + first[i].user + first[i].nice + first[i].sys + first[i].irq;
                  const second_idle = second[i].idle;
                  const second_total = second[i].idle + second[i].user + second[i].nice + second[i].sys + second[i].irq;
                  const third_idle = third[i].idle;
                  const third_total = third[i].idle + third[i].user + third[i].nice + third[i].sys + third[i].irq;
                  const first_usage = 1 - (second_idle - first_idle) / (second_total - first_total);
                  const second_usage = 1 - (third_idle - second_idle) / (third_total - second_total);
                  const per_usage = (first_usage + second_usage) / 2 * 100;
                  let nameCpu = "cpu" + String(i)
                  cores[nameCpu] = per_usage;
                  result[nameCpu] = per_usage;
                  usages.push(per_usage);
                }
                result["avg"] =  usages.reduce((a, b) => a + b, 0) / usages.length
                resolve(
                   result
                );
              } catch (err) {
                reject(err);
              }
            }, sampleTime);
          } catch (err) {
            reject(err);
          }
        }, sampleTime);
      } catch (err) {
        reject(err);
      }
    });
  }

}

