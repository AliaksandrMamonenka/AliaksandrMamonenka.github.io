import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MapComponent {
  @Input() position: Position;
}
