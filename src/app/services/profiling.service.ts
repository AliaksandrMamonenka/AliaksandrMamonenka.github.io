import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class ProfilingService {
    startTime: number = 0;

    constructor(private profiling: NgZone) {
    }

    startProfiling() {
        this.profiling.onUnstable.subscribe(() => {
            console.warn('Tree unstable');
            this.startTime = performance.now();
        });

        this.profiling.onStable.subscribe(() => {
            console.info(`Tree stable: ${(performance.now() - this.startTime).toFixed(3)} millisecond`);
        });
    }
}