import {Component, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'last-refresh',
  template: `<p class="pull-right last-refresh"><b>Last refresh time:</b> <span>{{time | async | date:'hh:mm:ss'}}</span></p>`,
})
export class LastRefreshComponent {
  @Input() time: EventEmitter<number>;
}