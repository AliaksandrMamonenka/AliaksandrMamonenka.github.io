import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent} from './app.component';
import {config} from './config/app.config'

// UI components
import {HeaderComponent} from './ui-components/header/header.component';
import {FooterComponent} from './ui-components/footer/footer.component';
import {WeatherComponent} from './ui-components/weather/weather.component';
import {MapComponent} from './ui-components/map/map.component';
import {LastRefreshComponent} from './ui-components/refresh/last-refresh.component';
import {SingleCityComponent} from './ui-components/single-city/single-city.component';
import {RealTimeUpdateComponent} from './ui-components/real-time-update/real-time-update.component';
import {FavoriteCityComponent} from './ui-components/favorite-city/favorite-city.component';
import {IconWeatherComponent} from './ui-components/icon-weather/icon-weather.component';
import {WindDataComponent} from './ui-components/wind-data/wind-data.component';

// Directives
import {TemperatureColorDirective} from './directives/temperature-color.directive'
import {StructDirective} from './directives/structural.directive'

// Custom pipes
import {CelsiusPipe} from './custom-pipes/celsius.pipe'
import {CityWeatherPipe} from './custom-pipes/city-weather.pipe'
import {GetDataPipe} from './custom-pipes/get-needed-data.pipe'

// Google map
import {AgmCoreModule} from 'angular2-google-maps/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: config.mapId
        })
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        WeatherComponent,
        MapComponent,
        LastRefreshComponent,
        SingleCityComponent,
        RealTimeUpdateComponent,
        FavoriteCityComponent,
        IconWeatherComponent,
        WindDataComponent,
        TemperatureColorDirective,
        StructDirective,
        CelsiusPipe,
        CityWeatherPipe,
        GetDataPipe
    ],
    providers: [CityWeatherPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
