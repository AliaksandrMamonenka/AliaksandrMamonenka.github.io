import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as WeatherDetailsActions from '../actions/weather-details.actions';
import { WeatherService } from '../services/weather.service';

@Injectable()
export class WeatherDetailsEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {
  }

  @Effect() getWeatherDetails$ = this.actions$
    .ofType(WeatherDetailsActions.ActionTypes.GET_WEATHER_DETAILS)
    .map(action => action.payload)
    .switchMap((data) => this.weatherService.getSingleDataFromServerById(data)
      .map((res) => {
        return new WeatherDetailsActions.SetWeatherDetailsActions(res);
      })
    );
}