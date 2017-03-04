import  { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';
import { InitialState } from '../../states';
import * as FilterDataActions from '../../actions/filter-data.actions';

import { WeatherList } from '../../ui-components/weather/weather-list.interface';
import { WeatherService } from "../../services/weather.service";
import { CityWeatherPipe } from "../../custom-pipes/city-weather.pipe";

@Component({
  selector: 'weather',
  templateUrl: './weather-page.component.html',
  providers: [WeatherService]
})
export class WeatherPageComponent implements OnInit {
  subscription: Subscription;
  position: Position = null;
  cityList: WeatherList[];
  filterData: any;

  @Input() newCity: string;

  constructor(private store: Store<InitialState>, private getWeatherData: WeatherService, private cityWeather: CityWeatherPipe) {
    this.filterData = {
      captcha: "Alex1",
      cityCounts: 50,
      tempType: "1",
      visibleElements: {
        direction: true,
        pressure: true,
        speed: true
      }
    };
  }

  ngOnInit() {
    this.store.select((s: InitialState) => s.geolocation)
      .subscribe((position: Position): void => {
        this.position = position;
        if (position && position.coords) {

          this.store.dispatch(new FilterDataActions.SetFilterDataActions(this.filterData));

          this.getWeatherData.getWeatherDataFromServer(this.position.coords.latitude, this.position.coords.longitude, '50')
            .subscribe(
              data => this.cityList = data.list,
              error => alert(error)
            );
        }
      });

    this.store.select((s: InitialState) => s.filterData)
      .subscribe((FilterData: any): void => {
        this.filterData = FilterData;
      });
  }
}