import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// APP config
import { config } from '../../config/app.config';

// Components
import { MapComponent } from '../../ui-components/map/map.component';

// Google map
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: config.mapId
    })],
  declarations: [
    MapComponent
  ],
  providers: [],
  exports: [
    MapComponent
  ]
})
export class MapModule {
}