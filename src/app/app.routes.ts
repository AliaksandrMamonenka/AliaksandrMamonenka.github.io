import { Routes } from '@angular/router';
import { WeatherPageComponent } from './pages/weather/weather-page.component';
import { GoogleMapPageComponent } from './pages/google-map/google-map-page.component';
import { NoContentPageComponent } from './pages/no-content/no-content-page.component';
import { WeatherDetailsComponent } from './ui-components/weather-details/weather-details.component';
import { CityWeatherWidgetComponent } from './ui-components/city-weather-widget/city-weather-widget.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'weather', pathMatch: 'full'},
  {path: 'widget', component: CityWeatherWidgetComponent,  outlet: 'city' },
  {
    path: 'weather', component: WeatherPageComponent,
    children: [
      {path: 'weather-details/:id', component: WeatherDetailsComponent}
    ]
  },
  {
    path: 'map', component: GoogleMapPageComponent

  },
  {path: '**', component: NoContentPageComponent}
];