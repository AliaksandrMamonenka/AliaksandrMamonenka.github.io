import { Component, Input } from '@angular/core';

@Component({
    selector: 'icon-weather',
    templateUrl: 'icon-weather.component.html'
})
export class IconWeatherComponent {
    @Input() icon: string;
}
