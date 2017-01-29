import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { WeatherList } from './weather-list.interface';
import { CityWeatherPipe } from "../../custom-pipes/city-weather.pipe";
import { WeatherService } from "../../services/weather.service";

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

  constructor(private cityWeather: CityWeatherPipe, private weather: WeatherService) {
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
    this.cityList =
      [
        {
          "id": 629553,
          "name": "Budilovo",
          "coord": {
            "lon": 27.516666,
            "lat": 53.883331
          },
          "main": {
            "temp": 269.257,
            "temp_min": 269.257,
            "temp_max": 269.257,
            "pressure": 1013.91,
            "sea_level": 1044.82,
            "grnd_level": 1013.91,
            "humidity": 96
          },
          "dt": 1485694043,
          "wind": {
            "speed": 5.67,
            "deg": 175.003
          },
          "sys": {
            "country": ""
          },
          "clouds": {
            "all": 68
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 628051,
          "name": "Griskovshchina",
          "coord": {
            "lon": 27.5,
            "lat": 53.866669
          },
          "main": {
            "temp": 269.257,
            "temp_min": 269.257,
            "temp_max": 269.257,
            "pressure": 1013.91,
            "sea_level": 1044.82,
            "grnd_level": 1013.91,
            "humidity": 96
          },
          "dt": 1485694045,
          "wind": {
            "speed": 5.67,
            "deg": 175.003
          },
          "sys": {
            "country": ""
          },
          "clouds": {
            "all": 68
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 624400,
          "name": "Novoye Medvezhino",
          "coord": {
            "lon": 27.450001,
            "lat": 53.883331
          },
          "main": {
            "temp": 269.257,
            "temp_min": 269.257,
            "temp_max": 269.257,
            "pressure": 1013.91,
            "sea_level": 1044.82,
            "grnd_level": 1013.91,
            "humidity": 96
          },
          "dt": 1485694198,
          "wind": {
            "speed": 5.67,
            "deg": 175.003
          },
          "sys": {
            "country": ""
          },
          "clouds": {
            "all": 68
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 624147,
          "name": "Ol’shëvo",
          "coord": {
            "lon": 27.516666,
            "lat": 53.916668
          },
          "main": {
            "temp": 269.257,
            "temp_min": 269.257,
            "temp_max": 269.257,
            "pressure": 1013.91,
            "sea_level": 1044.82,
            "grnd_level": 1013.91,
            "humidity": 96
          },
          "dt": 1485694199,
          "wind": {
            "speed": 5.67,
            "deg": 175.003
          },
          "sys": {
            "country": ""
          },
          "clouds": {
            "all": 68
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 625143,
          "name": "Horad Minsk",
          "coord": {
            "lon": 27.566668,
            "lat": 53.900002
          },
          "main": {
            "temp": 269.257,
            "temp_min": 269.257,
            "temp_max": 269.257,
            "pressure": 1013.91,
            "sea_level": 1044.82,
            "grnd_level": 1013.91,
            "humidity": 96
          },
          "dt": 1485694400,
          "wind": {
            "speed": 5.67,
            "deg": 175.003
          },
          "sys": {
            "country": ""
          },
          "clouds": {
            "all": 68
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 625144,
          "name": "Minsk",
          "coord": {
            "lon": 27.566668,
            "lat": 53.900002
          },
          "main": {
            "temp": 269.257,
            "temp_min": 269.257,
            "temp_max": 269.257,
            "pressure": 1013.91,
            "sea_level": 1044.82,
            "grnd_level": 1013.91,
            "humidity": 96
          },
          "dt": 1485694400,
          "wind": {
            "speed": 5.67,
            "deg": 175.003
          },
          "sys": {
            "country": ""
          },
          "clouds": {
            "all": 68
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 621275,
          "name": "Stolovaya",
          "coord": {
            "lon": 27.566668,
            "lat": 53.866669
          },
          "main": {
            "temp": 269.257,
            "temp_min": 269.257,
            "temp_max": 269.257,
            "pressure": 1013.91,
            "sea_level": 1044.82,
            "grnd_level": 1013.91,
            "humidity": 96
          },
          "dt": 1485694198,
          "wind": {
            "speed": 5.67,
            "deg": 175.003
          },
          "sys": {
            "country": ""
          },
          "clouds": {
            "all": 68
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 8020218,
          "name": "Malinovka",
          "coord": {
            "lon": 27.437401,
            "lat": 53.857899
          },
          "main": {
            "temp": 269.257,
            "temp_min": 269.257,
            "temp_max": 269.257,
            "pressure": 1013.91,
            "sea_level": 1044.82,
            "grnd_level": 1013.91,
            "humidity": 96
          },
          "dt": 1485694196,
          "wind": {
            "speed": 5.67,
            "deg": 175.003
          },
          "sys": {
            "country": ""
          },
          "clouds": {
            "all": 68
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 626462,
          "name": "Kruptsy",
          "coord": {
            "lon": 27.5,
            "lat": 53.933334
          },
          "main": {
            "temp": 269.257,
            "temp_min": 269.257,
            "temp_max": 269.257,
            "pressure": 1013.91,
            "sea_level": 1044.82,
            "grnd_level": 1013.91,
            "humidity": 96
          },
          "dt": 1485694200,
          "wind": {
            "speed": 5.67,
            "deg": 175.003
          },
          "sys": {
            "country": ""
          },
          "clouds": {
            "all": 68
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 621667,
          "name": "Sokolyanka",
          "coord": {
            "lon": 27.583332,
            "lat": 53.866669
          },
          "main": {
            "temp": 269.257,
            "temp_min": 269.257,
            "temp_max": 269.257,
            "pressure": 1013.91,
            "sea_level": 1044.82,
            "grnd_level": 1013.91,
            "humidity": 96
          },
          "dt": 1485694197,
          "wind": {
            "speed": 5.67,
            "deg": 175.003
          },
          "sys": {
            "country": ""
          },
          "clouds": {
            "all": 68
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        }
      ]
    ;
    // this.weather.getWeatherDataFromServer(this.position.coords.latitude, this.position.coords.longitude, '10').then((data: any) => {
    // 	this.spinnerVisibility = false;
    // 	this.cityList = data.list;
    // }, (error: any) => {
    // 	this.errorMessage = `We have some problem with Weather server! ${error}`;
    // });
  }

  ngOnInit(): void {
    this.getWeatherForCities();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.addNewCity();
  }
}
