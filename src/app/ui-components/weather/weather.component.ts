import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherList } from './weather-list.interface';

@Component({
  selector: 'weather-component',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  @Input() cityList: WeatherList[];
  @Input() filterData: any;

  favoriteCityDetails: WeatherList;

  constructor(private router: Router) {
  }

  getWeatherDetails(item: WeatherList): void {
    if (this.favoriteCityDetails) {
      this.favoriteCityDetails.favorite = false;
    }

    item.favorite = !item.favorite;
    this.router.navigate(['./weather/weather-details', item.id]);
    this.favoriteCityDetails = item;
  }

  removeItem(itemIndex: number) {
    this.cityList.splice(itemIndex, 1);
  }
}
