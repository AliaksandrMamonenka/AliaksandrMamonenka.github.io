import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {config} from './config/app.config'

// UI components
import {HeaderComponent} from './ui-components/header/header.component';
import {FooterComponent} from './ui-components/footer/footer.component';
import {WeatherComponent} from './ui-components/weather/weather.component';
import {MapComponent} from './ui-components/map/map.component';
import {LastRefreshComponent} from './ui-components/refresh/last-refresh.component';
import {SingleCityComponent} from './ui-components/single-city/single-city';

// Custom pipes
import {CelsiusPipe} from './custom-pipes/celsius.pipe'

// Google map
import {AgmCoreModule} from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
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
    CelsiusPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
