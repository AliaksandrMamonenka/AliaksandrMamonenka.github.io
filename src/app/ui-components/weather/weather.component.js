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
var app_config_1 = require('../../config/app.config');
var city_weather_pipe_1 = require("../../custom-pipes/city-weather.pipe");
var WeatherComponent = (function () {
    function WeatherComponent(cityWeather) {
        this.cityWeather = cityWeather;
        this.isVisible = false;
    }
    WeatherComponent.prototype.getWeatherDataFromServer = function (lat, lon, cnt) {
        var _this = this;
        var APPID = app_config_1.config.weatherId;
        var url = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lon + '&cnt=' + cnt + '&appid=' + APPID;
        fetch(url).then(function (response) { return response.json(); })
            .then(function (json) { return _this.cityList = json.list; })
            .catch(function (ex) {
            console.warn("Something went wrong: " + ex + " !!!");
        });
    };
    WeatherComponent.prototype.makeFavorite = function (item) {
        console.log(item);
        item.favorite = !item.favorite;
    };
    WeatherComponent.prototype.removeItem = function (itemIndex) {
        console.log(itemIndex);
        this.cityList.splice(itemIndex, 1);
    };
    WeatherComponent.prototype.addNewCity = function () {
        var _this = this;
        this.cityWeather.transform(this.newCity).then(function (data) {
            _this.cityList.unshift(data);
            _this.isVisible = false;
            _this.newCity = "";
        });
    };
    WeatherComponent.prototype.addItem = function () {
        this.isVisible = !this.isVisible;
    };
    WeatherComponent.prototype.ngOnInit = function () {
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
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Position)
    ], WeatherComponent.prototype, "position", void 0);
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'weather-component',
            templateUrl: './weather.component.html'
        }), 
        __metadata('design:paramtypes', [city_weather_pipe_1.CityWeatherPipe])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map