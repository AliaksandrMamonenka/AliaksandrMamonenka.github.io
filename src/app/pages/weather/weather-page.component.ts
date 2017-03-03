import  { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';
import { InitialState } from '../../states';

import { WeatherService } from "../../services/weather.service";
import { CityWeatherPipe } from "../../custom-pipes/city-weather.pipe";
import { stubFunc } from "./cityStub";

@Component({
  selector: 'weather',
  templateUrl: './weather-page.component.html',
  providers: [WeatherService]
})
export class WeatherPageComponent implements OnInit {
  subscription: Subscription;
  position: Position = null;
  // cityList: WeatherList[];
  cityList: any;
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
      });
    this.store.select((s: InitialState) => s.filterData)
      .subscribe((FilterData: any): void => {
        // ;
        this.filterData = FilterData;
      });

    this.getWeatherForCities();
  }


  addNewCity() {
    this.getWeatherData.getWeatherDataFromServer(this.position.coords.latitude, this.position.coords.longitude, '10')
      .subscribe(
        data => {
          debugger;
          return data;
        },
        error => {
          debugger;
          return error;
        }
      );


    // if (this.newCity) {
    //   this.cityWeather.transform(this.newCity).then((data: any) => {
    //     this.cityList.unshift(data);
    //     this.isVisible = false;
    //     this.newCity = "";
    //   });
    // }
  }

  getWeatherForCities(): void {
    this.cityList = stubFunc();
    // this.weather.getWeatherDataFromServer(this.position.coords.latitude, this.position.coords.longitude, '10').then((data: any) => {
    //   this.spinnerVisibility = false;
    //   this.cityList = data.list;
    // }, (error: any) => {
    //   this.errorMessage = `We have some problem with Weather server! ${error}`;
    // });
  }


  handleformData(data: any) {

    this.filterData = data;
  }
}