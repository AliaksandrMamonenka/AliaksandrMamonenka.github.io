import {Component, OnInit, Input} from '@angular/core';
import {config} from '../../config/app.config';

import {List} from './list.interface';
import {WeatherData} from './weather.interface';

@Component({
  selector: 'weather-component',
  templateUrl: './weather.component.html'
})

export class WeatherComponent implements OnInit {
  @Input() position: Position;
  
  cityList: List[];
  
  getWeatherDataFromServer(lat: number, lon: number, cnt: string): void {
    const APPID: string = config.weatherId;
    let url: string = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lon + '&cnt=' + cnt + '&appid=' + APPID;
    fetch(url).then((response) => response.json())
      .then((json: WeatherData) => this.cityList = json.list)
      .catch((ex: any) => {
        console.warn(`Something went wrong: ${ex} !!!`);
      });
  }
  
  //TODO: move this logic to pipe
  // cityIdBase: any = [];
  // cityBase: any = [];
  // currenCity: any = null;
  //
  // getSingleWeatherDataFromServer(wid: number): void {
  //   const APPID: string = config.weatherId;
  //
  //   let url: string = 'http://api.openweathermap.org/data/2.5/weather?id=' + wid + '&appid=' + APPID;
  //   fetch(url).then((response) => response.json())
  //     .then((json: any) => this.processWeatherData(json))
  //     .catch((ex: any) => {
  //       console.warn(`Something went wrong: ${ex} !!!`);
  //     });
  // }
  // processWeatherData(data:any){
  //   this.cityIdBase.push(data.id);
  // }
  //
  // select(item: any) {
  //   console.log(item);
  //   // if (this.cityIdBase.length && this.cityIdBase.find(item.id)) {
  //   //
  //   // } else {
  //   //   this.getSingleWeatherDataFromServer(item.id);
  //   // }
  // }
  //
  // getCity(){}
  // setCuty(){}
  //
  ngOnInit(): void {
    this.getWeatherDataFromServer(this.position.coords.latitude, this.position.coords.longitude, '50');
  }
}
