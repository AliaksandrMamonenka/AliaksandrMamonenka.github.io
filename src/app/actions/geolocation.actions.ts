import { Action } from '@ngrx/store';

export const ActionTypes = {
  SET_COORDINATES: '[GEOLOCATION] SET COORDINATES',
  GET_COORDINATES: '[GEOLOCATION] GET COORDINATES'
};

export class SetGeolocationActions implements Action {
  type = ActionTypes.SET_COORDINATES;

  constructor(public payload: any) {
  }
}

export class GetGeolocationActions implements Action {
  type = ActionTypes.GET_COORDINATES;

  constructor(public payload: any) {
  }
}

export type Actions = SetGeolocationActions | GetGeolocationActions;

