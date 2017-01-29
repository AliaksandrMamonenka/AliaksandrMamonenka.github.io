import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class ProfilingService {
  startTime: number = 0;
  isNotWorked: boolean = true;

  constructor(private profiling: NgZone) {
  }

  startProfiling() {
    if (this.isNotWorked) {
      this.isNotWorked = !this.isNotWorked;
      this.profiling.onUnstable.subscribe(() => {
        console.warn('Tree unstable');
        this.startTime = performance.now();
      });

      this.profiling.onStable.subscribe(() => {
        console.info(`Tree stable: ${(performance.now() - this.startTime).toFixed(3)} millisecond`);
      });
    } else {
      this.isNotWorked = !this.isNotWorked;
      this.profiling.onUnstable.closed = true;
      this.profiling.onStable.closed = true;
      this.startTime = 0;
    }
  }
}