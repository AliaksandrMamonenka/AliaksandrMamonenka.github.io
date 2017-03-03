import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../../reducer';
import { EffectsModule } from '@ngrx/effects';
import { GeolocationEffects } from '../../effects/geolocation.effects';
import { WeatherDetailsEffects } from '../../effects/weather-details.effects';

import { SpinnerComponent } from '../../ui-components/spinner/spinner.component';

import { WeatherComponent } from '../../ui-components/weather/weather.component';

// Components

import { RealTimeUpdateComponent } from '../../ui-components/real-time-update/real-time-update.component';
import { WeatherFilterComponent } from '../../ui-components/weather-filter/weather-filter.component';
import { WeatherFilterErrorHandlingComponent } from '../../ui-components/weather-filter-error-handling/weather-filter-error-handling.component';
import { TemperatureTypeComponent } from '../../ui-components/temperature-type/temperature-type.component';

// Directives
import { StructDirective } from '../../directives/structural.directive';
import { TemperatureColorDirective } from '../../directives/temperature-color.directive';

// Pages
import { WeatherPageComponent } from '../../pages/weather/weather-page.component';
import { GoogleMapPageComponent } from '../../pages/google-map/google-map-page.component';
import { NoContentPageComponent } from '../../pages/no-content/no-content-page.component';

import { ROUTES } from '../../app.routes';

// UI components
import { HeaderComponent } from '../../ui-components/header/header.component';
import { FooterComponent } from '../../ui-components/footer/footer.component';
import { LastRefreshComponent } from '../../ui-components/refresh/last-refresh.component';
import { SingleCityComponent } from '../../ui-components/single-city/single-city.component';
import { FavoriteCityComponent } from '../../ui-components/favorite-city/favorite-city.component';
import { WeatherDetailsComponent } from '../../ui-components/weather-details/weather-details.component';
import { CityWeatherWidgetComponent } from '../../ui-components/city-weather-widget/city-weather-widget.component';

// Custom pipes
import { CityWeatherPipe } from '../../custom-pipes/city-weather.pipe';
import { GetDataPipe } from '../../custom-pipes/get-needed-data.pipe';
import { WeatherService } from "../../services/weather.service";

const appEffectsRun = [
  EffectsModule.run(GeolocationEffects),
  EffectsModule.run(WeatherDetailsEffects)
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    SharedModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    StoreModule.provideStore(reducer),
    appEffectsRun
  ],
  declarations: [
    WeatherComponent,
    HeaderComponent,
    FooterComponent,
    LastRefreshComponent,
    SingleCityComponent,
    FavoriteCityComponent,
    CityWeatherPipe,
    GetDataPipe,
    WeatherPageComponent,
    GoogleMapPageComponent,
    NoContentPageComponent,

    SpinnerComponent,
    WeatherDetailsComponent,
    CityWeatherWidgetComponent,
    RealTimeUpdateComponent,
    StructDirective,
    TemperatureColorDirective,
    WeatherFilterComponent,
    WeatherFilterErrorHandlingComponent,
    TemperatureTypeComponent
  ],
  providers: [CityWeatherPipe, WeatherService],
  exports: [
    WeatherComponent,
    BrowserModule,
    HttpModule,
    JsonpModule,
    SharedModule,
    RouterModule,
    StoreModule,
    EffectsModule,
    HeaderComponent,
    FooterComponent,
    LastRefreshComponent,
    SingleCityComponent,
    FavoriteCityComponent,
    CityWeatherPipe,
    GetDataPipe,
    WeatherPageComponent,
    GoogleMapPageComponent,
    NoContentPageComponent,
    SpinnerComponent,
    WeatherDetailsComponent,
    CityWeatherWidgetComponent,
    RealTimeUpdateComponent,
    StructDirective,
    TemperatureColorDirective,

    WeatherFilterComponent,
    WeatherFilterErrorHandlingComponent,
    TemperatureTypeComponent
  ]
})
export class CoreModule {
}