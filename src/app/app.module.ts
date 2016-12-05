import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

// UI components
import { HeaderComponent } from './ui-components/header/header.component';
import { FooterComponent } from './ui-components/footer/footer.component';
import { WeatherComponent } from './ui-components/weather/weather.component';
import { MapComponent } from './ui-components/map/map.component';

// Google map
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT18gljZ0tFkBe_8oAPC5le0_gJuLs4OE'
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    MapComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
