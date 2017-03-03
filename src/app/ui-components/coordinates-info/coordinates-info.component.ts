import { Component, Input } from '@angular/core';

@Component({
  selector: 'coord-info',
  templateUrl: `
                <div class="alert alert-info"> 
                        Your coordinates are: 
                     Latitude <b>{{position.coords.latitude | number:'1.3-3'}}</b>, 
                     Longitude <b>{{position.coords.longitude | number:'1.3-3'}}</b>, 
                     Accuracy <b>{{position.coords.accuracy}}</b>
                </div>
                `
})

export class CoordinatesInfoComponent {
  @Input() position: string;
}
