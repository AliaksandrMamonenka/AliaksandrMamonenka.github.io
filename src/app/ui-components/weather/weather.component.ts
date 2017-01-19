import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { config } from '../../config/app.config';

import { WeatherList } from './weather-list.interface';
import { WeatherData } from './weather.interface';
import { CityWeatherPipe } from "../../custom-pipes/city-weather.pipe";

@Component({
    selector: 'weather-component',
    templateUrl: './weather.component.html'
})

export class WeatherComponent implements OnInit, OnChanges {
    @Input() position: Position;
    @Input() newCity: string;
    @Output() favoriteCityUpdated = new EventEmitter();

    cityList: WeatherList[];
    spinnerVisibility: boolean = true;
    errorMessage: string;
    clickedItems: string[] = [];
    isVisible: boolean = false;
    favoriteCityDetails: WeatherList;

    constructor(private cityWeather: CityWeatherPipe) {
    }


    getWeatherDataFromServer(lat: number, lon: number, cnt: string): void {
        const APPID: string = config.weatherId;
        let url: string = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lon + '&cnt=' + cnt + '&appid=' + APPID;
        fetch(url).then((response) => response.json())
            .then((json: WeatherData) => {
                this.spinnerVisibility = false;
                this.cityList = json.list;
            })
            .catch((ex: string) => {
                this.errorMessage = `We have some problem with Weather server! ${ex}`;
            });
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

    ngOnInit(): void {
        this.getWeatherDataFromServer(this.position.coords.latitude, this.position.coords.longitude, '50');
    }

    ngOnChanges(changes: SimpleChanges) {
        this.addNewCity();
    }
}
