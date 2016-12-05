import { Component, OnInit } from '@angular/core';

interface List {
  name: string;
  main: {
    temp: string;
    pressure: string;
    humidity: string;
  }
}

interface WeatherData {
  list: List[];
}

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  }
}

@Component({
  selector: 'weather-component',
  templateUrl: './weather.component.html'
})

export class WeatherComponent implements OnInit {
  weatherInCities: List[];

  getWeatherDataFromServer(lat: number, lon: number, cnt: string): void {
    const APPID: string = 'd30f5843f04e9c5704ca3442d832670d';
    let url: string = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lon + '&cnt=' + cnt + '&&appid=' + APPID;

    fetch(url).then((response) => response.json())
        .then((json: WeatherData) => this.parseJSONintoHTML(json))
        .catch((ex: any) => {
          console.warn(`Something went wrong: ${ex} !!!`);
        });

  }

  parseJSONintoHTML = (data: WeatherData) => {
    this.weatherInCities = data.list;
  };

  success = (position: Position) => {
    this.getWeatherDataFromServer(position.coords.latitude, position.coords.longitude, '50');
  };

  error(): void {
    console.warn('ERROR: happened something bad, try again. Could you please...');
  }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition(this.success, this.error);
  }
}
