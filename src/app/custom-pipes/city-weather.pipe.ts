import {Pipe, PipeTransform} from '@angular/core';

import {config} from '../config/app.config';

@Pipe({
  name: 'CityWeather'
})
export class CityWeatherPipe implements PipeTransform {
  static currentValue: string = null;
  private newValue: string = null;
  
  // getSingleWeatherDataFromServer(cityName: string): void {
  //   const APPID: string = config.weatherId;
  //
  //   let url: string = 'http://api.openweathermap.org/data/2.5/weather?q={' + cityName + '}&appid=' + APPID;
  //
  //   fetch(url).then((response) => response.json())
  //     .then((json: any) => {
  //       console.log(json);
  //       return CityWeatherPipe.currentValue = json;
  //     })
  //
  //     .catch((ex: any) => {
  //       console.warn(`Something went wrong: ${ex} !!!`);
  //     });
  // }
  
  transform(newValue: string): string {
    if (this.newValue === null) {
      debugger;
      CityWeatherPipe.currentValue = this.newValue = newValue;
      return CityWeatherPipe.currentValue;
    } else {
      // this.getSingleWeatherDataFromServer(newValue);
    }
  }
}