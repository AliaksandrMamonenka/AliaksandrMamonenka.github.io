import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { MapModule } from './modules/map/map.module';
import { WeatherModule } from './modules/weather/weather.module';
import PositionService from './services/position.service';


@NgModule({
  imports: [
    CoreModule,
    MapModule,
    WeatherModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    PositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
