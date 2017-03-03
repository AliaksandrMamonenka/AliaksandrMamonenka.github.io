import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IconWeatherComponent } from '../../ui-components/icon-weather/icon-weather.component';
import { WindDataComponent } from '../../ui-components/wind-data/wind-data.component';
import { ErrorHandlingComponent } from '../../ui-components/error-handling/error-handling.component';
import { CoordinatesInfoComponent } from '../../ui-components/coordinates-info/coordinates-info.component';

import { CelsiusPipe } from '../../custom-pipes/celsius.pipe';


// APP config
import { config } from '../../config/app.config';
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: config.mapId
    }),
  ],
  declarations: [
    IconWeatherComponent,
    CelsiusPipe,
    WindDataComponent,
    ErrorHandlingComponent,
    CoordinatesInfoComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconWeatherComponent,
    CelsiusPipe,
    WindDataComponent,
    ErrorHandlingComponent,
    CoordinatesInfoComponent,
    AgmCoreModule
  ]
})
export class SharedModule {
}