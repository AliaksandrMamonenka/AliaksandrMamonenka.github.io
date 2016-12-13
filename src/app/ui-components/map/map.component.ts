import {Component, Input} from '@angular/core';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html'
})

export class MapComponent {
  @Input() position: Position;
}
