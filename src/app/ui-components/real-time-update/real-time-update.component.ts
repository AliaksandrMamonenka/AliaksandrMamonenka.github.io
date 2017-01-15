import { Component, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'real-time-update',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<div class="row" *ngIf="items">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="well well-sm">
                            <button type="button" class="btn btn-info disabled" *ngFor="let item of items;">{{item}}</button>
                        </div>
                    </div>
                </div>
                `
})
export class RealTimeUpdateComponent {
    @Input() items: string[];

    constructor(private changeDetector: ChangeDetectorRef) {

        setInterval(() => {
            this.changeDetector.markForCheck();
        }, 5000);
    }
}