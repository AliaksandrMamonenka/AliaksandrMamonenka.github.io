"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var city_weather_pipe_1 = require("../../custom-pipes/city-weather.pipe");
var weather_service_1 = require("../../services/weather.service");
var cityStub_1 = require("./cityStub");
var WeatherComponent = (function () {
    function WeatherComponent(cityWeather, weather) {
        this.cityWeather = cityWeather;
        this.weather = weather;
        this.favoriteCityUpdated = new core_1.EventEmitter();
        this.spinnerVisibility = true;
        this.clickedItems = [];
        this.isVisible = false;
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
    WeatherComponent.prototype.handleformData = function (data) {
        this.filterData = data;
    };
    WeatherComponent.prototype.makeFavorite = function (item) {
        if (this.favoriteCityDetails) {
            this.favoriteCityDetails.favorite = false;
        }
        item.favorite = !item.favorite;
        this.favoriteCityDetails = item;
        this.clickedItems.push(this.favoriteCityDetails.name);
        this.favoriteCityUpdated.emit(this.favoriteCityDetails);
    };
    WeatherComponent.prototype.removeItem = function (itemIndex) {
        this.cityList.splice(itemIndex, 1);
    };
    WeatherComponent.prototype.addNewCity = function () {
        var _this = this;
        if (this.newCity) {
            this.cityWeather.transform(this.newCity).then(function (data) {
                _this.cityList.unshift(data);
                _this.isVisible = false;
                _this.newCity = "";
            });
        }
    };
    WeatherComponent.prototype.getWeatherForCities = function () {
        this.cityList = cityStub_1.stubFunc();
        // this.weather.getWeatherDataFromServer(this.position.coords.latitude, this.position.coords.longitude, '10').then((data: any) => {
        //   this.spinnerVisibility = false;
        //   this.cityList = data.list;
        // }, (error: any) => {
        //   this.errorMessage = `We have some problem with Weather server! ${error}`;
        // });
    };
    WeatherComponent.prototype.ngOnInit = function () {
        this.getWeatherForCities();
    };
    WeatherComponent.prototype.ngOnChanges = function (changes) {
        this.addNewCity();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Position)
    ], WeatherComponent.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WeatherComponent.prototype, "newCity", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WeatherComponent.prototype, "favoriteCityUpdated", void 0);
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'weather-component',
            templateUrl: './weather.component.html',
            providers: [weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [city_weather_pipe_1.CityWeatherPipe, weather_service_1.WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map