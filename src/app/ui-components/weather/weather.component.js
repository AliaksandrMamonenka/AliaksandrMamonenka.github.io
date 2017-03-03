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
var router_1 = require('@angular/router');
// ngrx
var store_1 = require('@ngrx/store');
var WeatherComponent = (function () {
    function WeatherComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    WeatherComponent.prototype.getWeatherDetails = function (item) {
        if (this.favoriteCityDetails) {
            this.favoriteCityDetails.favorite = false;
        }
        // this.store.dispatch(new WeatherDetailsActions.GetWeatherDetailsActions(item.id));
        item.favorite = !item.favorite;
        this.router.navigate(['./weather/weather-details', item.id]);
        this.favoriteCityDetails = item;
    };
    WeatherComponent.prototype.removeItem = function (itemIndex) {
        this.cityList.splice(itemIndex, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], WeatherComponent.prototype, "cityList", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WeatherComponent.prototype, "filterData", void 0);
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'weather-component',
            templateUrl: './weather.component.html'
        }), 
        __metadata('design:paramtypes', [store_1.Store, router_1.Router])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map