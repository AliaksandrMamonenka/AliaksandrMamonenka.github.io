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
var WeatherComponent = (function () {
    function WeatherComponent() {
        var _this = this;
        this.parseJSONintoHTML = function (data) {
            _this.weatherInCities = data.list;
        };
        this.success = function (position) {
            _this.getWeatherDataFromServer(position.coords.latitude, position.coords.longitude, '50');
        };
    }
    WeatherComponent.prototype.getWeatherDataFromServer = function (lat, lon, cnt) {
        var _this = this;
        var APPID = 'd30f5843f04e9c5704ca3442d832670d';
        var url = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lon + '&cnt=' + cnt + '&&appid=' + APPID;
        fetch(url).then(function (response) { return response.json(); })
            .then(function (json) { return _this.parseJSONintoHTML(json); })
            .catch(function (ex) {
            console.warn("Something went wrong: " + ex + " !!!");
        });
    };
    WeatherComponent.prototype.error = function () {
        console.warn('ERROR: happened something bad, try again. Could you please...');
    };
    WeatherComponent.prototype.ngOnInit = function () {
        navigator.geolocation.getCurrentPosition(this.success, this.error);
    };
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