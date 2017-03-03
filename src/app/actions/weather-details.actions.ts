import { Action } from '@ngrx/store';

export const ActionTypes = {
  SET_WEATHER_DETAILS: '[WEATHER_DETAILS] SET WEATHER_DETAILS',
  GET_WEATHER_DETAILS: '[WEATHER_DETAILS] GET WEATHER_DETAILS'
};

export class SetWeatherDetailsActions implements Action {
  type = ActionTypes.SET_WEATHER_DETAILS;

  constructor(public payload: any) {
  }
}

export class GetWeatherDetailsActions implements Action {
  type = ActionTypes.GET_WEATHER_DETAILS;

  constructor(public payload: any) {
  }
}

export type Actions = SetWeatherDetailsActions | GetWeatherDetailsActions;

