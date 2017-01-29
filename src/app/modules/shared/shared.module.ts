import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconWeatherComponent } from '../../ui-components/icon-weather/icon-weather.component';
import { WindDataComponent } from '../../ui-components/wind-data/wind-data.component';
import { ErrorHandlingComponent } from '../../ui-components/error-handling/error-handling.component';

import { CelsiusPipe } from '../../custom-pipes/celsius.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconWeatherComponent,
    CelsiusPipe,
    WindDataComponent,
    ErrorHandlingComponent
  ],
  exports: [
    CommonModule,
    IconWeatherComponent,
    CelsiusPipe,
    WindDataComponent,
    ErrorHandlingComponent
  ]
})
export class SharedModule {
}