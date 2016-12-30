import {Component, OnInit, ChangeDetectorRef} from '@angular/core';

import {FakeDataProvider} from './dataProvider';

@Component({
    selector: 'real-time-update',
    template: '<h5 class="pull-right" style="margin: 10px; padding: 10px; background-color: lavenderblush"><b>Real time update every 5 sec:</b> {{dataProvider.data}}</h5>'
})
export class RealTimeUpdateComponent implements OnInit {
    constructor(private changeDetector: ChangeDetectorRef, private dataProvider: FakeDataProvider) {
    }

    ngOnInit() {
        this.changeDetector.detach();
        setInterval(() => {

            // I took the decision from here https://github.com/angular/angular/issues/7311
            this.changeDetector.reattach();
            this.changeDetector.detectChanges();
            this.changeDetector.detach();

        }, 5000);
    }
}