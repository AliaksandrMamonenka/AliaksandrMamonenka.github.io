import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProfilingService } from './services/profiling.service';

import { ComponentType } from './component-type.interface';
import { WeatherList } from './ui-components/weather/weather-list.interface';
import '../../public/css/styles.css';

@Component({
    selector: 'weather-app',
    templateUrl: './app.component.html',
    providers: [ProfilingService]
})
export class AppComponent implements OnInit {
    time: EventEmitter<{}> = new EventEmitter(null);

    errorMessage: string;
    newCity: string;
    checkCity: string;
    isVisible: boolean = false;
    isFavotiteVisible: boolean = false;
    position: Position = null;
    componentTypeSettings: ComponentType;
    favoriteCityDetails: WeatherList;

    constructor(private profiling: ProfilingService) {
    }

    addNewCity() {
        this.isFavotiteVisible = false;
        this.isVisible = true;
        this.componentTypeSettings = {
            name: 'Add a new city in the table',
            isAddCity: true
        };
    }

    checkCityWeather() {
        this.isFavotiteVisible = false;
        this.isVisible = true;
        this.componentTypeSettings = {
            name: 'Check city weather',
            isAddCity: false
        };
    }

    handleCityUpdated(city: any) {
        if (this.componentTypeSettings.isAddCity) {
            this.newCity = city;
        } else {
            debugger;
            this.checkCity = city;
        }
    }

    handleFavoriteCityUpdated(favoriteCity: any) {
        this.isVisible = false;
        this.isFavotiteVisible = true;
        this.favoriteCityDetails = favoriteCity;
    }

    startProfiling() {
        this.profiling.startProfiling();
    }

    ngOnInit(): void {
        navigator.geolocation.getCurrentPosition(
            (position: Position): void => {
                let currentTime = new Date().getTime();
                this.position = position;
                this.time.emit(currentTime);
            },
            (error) => this.errorMessage = 'User denited GEOLOCATION. Without your coordinates this app does not make sense! Please allow this request'
        );
    }
}
