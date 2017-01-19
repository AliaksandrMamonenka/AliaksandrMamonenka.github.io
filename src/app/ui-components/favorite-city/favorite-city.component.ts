import { Component, Input } from '@angular/core';
import { WeatherList } from '../weather/weather-list.interface';

@Component({
    selector: 'favorite-city',
    templateUrl: './favorite-city.component.html'
})
export class FavoriteCityComponent {
    @Input() cityDetails: WeatherList;

    constructor() {
    }
}
