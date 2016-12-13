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
var WeatherComponent = (function () {
    function WeatherComponent() {
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
    WeatherComponent.prototype.ngOnInit = function () {
        this.getWeatherDataFromServer(this.position.coords.latitude, this.position.coords.longitude, '50');
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
        __metadata('design:paramtypes', [])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map