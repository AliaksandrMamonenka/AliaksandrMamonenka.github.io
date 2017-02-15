import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { WeatherList } from './weather-list.interface';
import { CityWeatherPipe } from "../../custom-pipes/city-weather.pipe";
import { WeatherService } from "../../services/weather.service";
import { stubFunc } from "./cityStub";

@Component({
  selector: 'weather-component',
  templateUrl: './weather.component.html',
  providers: [WeatherService]
})

export class WeatherComponent implements OnInit, OnChanges {
  @Input() position: Position;
  @Input() newCity: string;
  @Output() favoriteCityUpdated = new EventEmitter();

  // cityList: WeatherList[];
  cityList: any;
  spinnerVisibility: boolean = true;
  errorMessage: string;
  clickedItems: string[] = [];
  isVisible: boolean = false;
  favoriteCityDetails: WeatherList;
  filterData: any;

  constructor(private cityWeather: CityWeatherPipe, private weather: WeatherService) {
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

  handleformData(data: any) {
    this.filterData = data;
  }

  makeFavorite(item: WeatherList): void {
    if (this.favoriteCityDetails) {
      this.favoriteCityDetails.favorite = false;
    }

    item.favorite = !item.favorite;
    this.favoriteCityDetails = item;
    this.clickedItems.push(this.favoriteCityDetails.name);
    this.favoriteCityUpdated.emit(this.favoriteCityDetails);
  }

  removeItem(itemIndex: number) {
    this.cityList.splice(itemIndex, 1);
  }

  addNewCity() {
    if (this.newCity) {
      this.cityWeather.transform(this.newCity).then((data: any) => {
        this.cityList.unshift(data);
        this.isVisible = false;
        this.newCity = "";
      });
    }
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

  ngOnInit(): void {
    this.getWeatherForCities();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.addNewCity();
  }
}
