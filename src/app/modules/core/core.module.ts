import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

// UI components
import { HeaderComponent } from '../../ui-components/header/header.component';
import { FooterComponent } from '../../ui-components/footer/footer.component';
import { LastRefreshComponent } from '../../ui-components/refresh/last-refresh.component';
import { SingleCityComponent } from '../../ui-components/single-city/single-city.component';
import { FavoriteCityComponent } from '../../ui-components/favorite-city/favorite-city.component';

// Custom pipes
import { CityWeatherPipe } from '../../custom-pipes/city-weather.pipe';
import { GetDataPipe } from '../../custom-pipes/get-needed-data.pipe';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LastRefreshComponent,
    SingleCityComponent,
    FavoriteCityComponent,
    CityWeatherPipe,
    GetDataPipe
  ],
  providers: [CityWeatherPipe],
  exports: [
    BrowserModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    LastRefreshComponent,
    SingleCityComponent,
    FavoriteCityComponent,
    CityWeatherPipe,
    GetDataPipe
  ]
})
export class CoreModule {
}