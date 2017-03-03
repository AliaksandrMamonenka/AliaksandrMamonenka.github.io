import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';
import { InitialState } from '../../states';

import { WeatherService } from "../../services/weather.service";

@Component({
  selector: 'city-weather-widget',
  templateUrl: './city-weather-widget.component.html',
  providers: [WeatherService]
})
export class CityWeatherWidgetComponent implements OnInit {
  position: Position = null;
  cityDetails:any = null;


  constructor(private store: Store<InitialState>, private getWeatherForUserCity: WeatherService) {
  }

  ngOnInit() {
    this.store.select((s: InitialState) => s.geolocation)
      .subscribe((position: Position): void => {
        this.position = position;
        if (position && position.coords) {
          this.getSingleCityData();
        }
      });

  }

  getSingleCityData() {
    this.getWeatherForUserCity.getSingleDataFromServerByPosition(this.position.coords.latitude, this.position.coords.longitude)
      .subscribe(
        data => {

          console.log("dfdsf");
          console.log(data);
          this.cityDetails = data;
          return data;
        },
        error => {
          // ;
          return error;
        }
      );
  }

}
