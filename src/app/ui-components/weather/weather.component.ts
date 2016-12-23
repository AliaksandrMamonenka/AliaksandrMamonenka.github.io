import {Component, OnInit, Input} from '@angular/core';
import {config} from '../../config/app.config';

import {List} from './list.interface';
import {WeatherData} from './weather.interface';
import {CityWeatherPipe} from "../../custom-pipes/city-weather.pipe";

@Component({
    selector: 'weather-component',
    templateUrl: './weather.component.html'
})

export class WeatherComponent implements OnInit {
    @Input() position: Position;

    // cityList: List[];
    cityList: any;
    newCity: string;
    isVisible: boolean = false;

    constructor(private cityWeather: CityWeatherPipe) {
    }


    getWeatherDataFromServer(lat: number, lon: number, cnt: string): void {
        const APPID: string = config.weatherId;
        let url: string = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lon + '&cnt=' + cnt + '&appid=' + APPID;
        fetch(url).then((response) => response.json())
            .then((json: WeatherData) => this.cityList = json.list)
            .catch((ex: string) => {
                console.warn(`Something went wrong: ${ex} !!!`);
            });
    }

    makeFavorite(item: any): void {
        console.log(item);
        item.favorite = !item.favorite;
    }

    removeItem(itemIndex: any) {
        console.log(itemIndex);

        this.cityList.splice(itemIndex, 1);
    }

    addNewCity() {

        this.cityWeather.transform(this.newCity).then((data) => {
            this.cityList.unshift(data);
            this.isVisible = false;
            this.newCity = "";
        });
    }

    addItem() {
        this.isVisible = !this.isVisible;
    }

    ngOnInit(): void {
        this.cityList = [
            {
                name: 'alex',
                main: {
                    temp: 20, pressure: 10, humidity: 32
                }
            }, {
                name: 'alex11111',
                main: {
                    temp: 20, pressure: 10, humidity: 32
                }
            }, {
                name: 'alex',
                main: {
                    temp: 20, pressure: 10, humidity: 32
                }
            }, {
                name: 'alex',
                main: {
                    temp: 20, pressure: 10, humidity: 32
                }
            }, {
                name: 'alex',
                main: {
                    temp: 20, pressure: 10, humidity: 32
                }
            }, {
                name: 'alex',
                main: {
                    temp: 20, pressure: 10, humidity: 32
                }
            }
        ];
        // this.getWeatherDataFromServer(this.position.coords.latitude, this.position.coords.longitude, '50');
    }
}
