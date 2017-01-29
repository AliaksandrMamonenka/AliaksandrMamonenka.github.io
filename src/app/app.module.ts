import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { MapModule } from './modules/map/map.module';
import { WeatherModule } from './modules/weather/weather.module';

@NgModule({
  imports: [
    CoreModule,
    MapModule,
    WeatherModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
