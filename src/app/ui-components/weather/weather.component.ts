import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherList } from './weather-list.interface';

// ngrx
import { Store } from '@ngrx/store';
import * as WeatherDetailsActions from '../../actions/weather-details.actions';
import { InitialState } from '../../states';

@Component({
  selector: 'weather-component',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  @Input() cityList: WeatherList[];
  @Input() filterData: any;

  favoriteCityDetails: WeatherList;

  constructor(private store: Store<InitialState>, private router: Router) {
  }

  getWeatherDetails(item: WeatherList): void {
    if (this.favoriteCityDetails) {
      this.favoriteCityDetails.favorite = false;
    }
    // this.store.dispatch(new WeatherDetailsActions.GetWeatherDetailsActions(item.id));
    item.favorite = !item.favorite;
    this.router.navigate(['./weather/weather-details',item.id]);
    this.favoriteCityDetails = item;
  }

  removeItem(itemIndex: number) {
    this.cityList.splice(itemIndex, 1);
  }
}
