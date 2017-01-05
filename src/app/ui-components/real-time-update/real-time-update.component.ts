import {Component, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';

import {FakeDataProvider} from './dataProvider';

@Component({
    selector: 'real-time-update',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<h5 class="pull-right" style="margin: 10px; padding: 10px; background-color: lavenderblush"><b>Real time update every 5 sec:</b> {{dataProvider.data}}</h5>'
})
export class RealTimeUpdateComponent {
    constructor(private changeDetector: ChangeDetectorRef, private dataProvider: FakeDataProvider) {

        setInterval(() => {
            this.changeDetector.markForCheck();
        }, 5000);
    }
}