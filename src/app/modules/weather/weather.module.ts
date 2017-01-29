import { NgModule } from '@angular/core';
import  { SharedModule } from '../shared/shared.module';

// Components
import { WeatherComponent } from '../../ui-components/weather/weather.component';
import { RealTimeUpdateComponent } from '../../ui-components/real-time-update/real-time-update.component';
import { SpinnerComponent } from '../../ui-components/spinner/spinner.component';

// Directives
import { StructDirective } from '../../directives/structural.directive';
import { TemperatureColorDirective } from '../../directives/temperature-color.directive';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    WeatherComponent,
    RealTimeUpdateComponent,
    StructDirective,
    TemperatureColorDirective,
    SpinnerComponent
  ],
  providers: [],
  exports: [
    WeatherComponent,
    RealTimeUpdateComponent,
    StructDirective,
    TemperatureColorDirective,
    SpinnerComponent
  ]
})
export class WeatherModule {
}