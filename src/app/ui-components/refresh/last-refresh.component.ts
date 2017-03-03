import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'last-refresh',
  template: `<p class="pull-right"><b>Last refresh time: </b><span *ngIf="time">{{time | date:'hh:mm:ss'}}</span></p>`,
})
export class LastRefreshComponent {
  @Input() time: number;
}