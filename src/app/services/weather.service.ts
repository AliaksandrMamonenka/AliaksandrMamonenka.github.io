import { Injectable } from '@angular/core';
import { config } from "../config/app.config";
import { WeatherData } from "../ui-components/weather/weather.interface";

@Injectable()
export class WeatherService {
  getWeatherDataFromServer(lat: number, lon: number, cnt: string) {
    const APPID: string = config.weatherId;
    let url: string = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lon + '&cnt=' + cnt + '&appid=' + APPID;

    return new Promise(function (onSuccess, onError) {
      fetch(url).then((response) => response.json())
        .then((json: WeatherData) => {
          onSuccess(json);
        })
        .catch((ex: string) => {
          onError(ex);
        });
    });
  }
}