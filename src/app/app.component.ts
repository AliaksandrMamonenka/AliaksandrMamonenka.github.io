import { Component, OnInit, EventEmitter } from '@angular/core';
import { PositionService } from './services/position.service';
import { ProfilingService } from './services/profiling.service';

import { ComponentType } from './component-type.interface';
import { WeatherList } from './ui-components/weather/weather-list.interface';
import '../../public/css/styles.css';

@Component({
  selector: 'weather-app',
  templateUrl: './app.component.html',
  providers: [ProfilingService, PositionService]
})
export class AppComponent implements OnInit {
  time: EventEmitter<{}> = new EventEmitter(null);

  hideBtn: boolean;
  errorMessage: string;
  newCity: string;
  checkCity: string;
  isVisible: boolean = false;
  isFavotiteVisible: boolean = false;
  position: any = null;
  componentTypeSettings: ComponentType;
  favoriteCityDetails: WeatherList;

  constructor(private profiling: ProfilingService, private userPosition: PositionService) {

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
      this.checkCity = city;
    }
  }

  handleFavoriteCityUpdated(favoriteCity: any) {
    this.isVisible = false;
    this.isFavotiteVisible = true;
    this.favoriteCityDetails = favoriteCity;
  }

  startProfiling() {
    this.hideBtn = true;
    this.profiling.startProfiling();
  }

  updateUserPosition(data: Position): void {
    this.position = data;
    this.time.emit(data.timestamp);
  }

  ngOnInit(): void {
    this.userPosition.getCurrentUserPosition().then((userPosition: Position) => {
      this.updateUserPosition(userPosition);
    });
  }
}