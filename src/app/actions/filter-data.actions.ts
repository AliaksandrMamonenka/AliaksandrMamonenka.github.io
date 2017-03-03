import { Action } from '@ngrx/store';

export const ActionTypes = {
  SET_FILTER_DATA: '[FILTER_DATA] SET FILTER_DATA',
  GET_FILTER_DATA: '[FILTER_DATA] GET FILTER_DATA'
};

export class SetFilterDataActions implements Action {
  type = ActionTypes.SET_FILTER_DATA;

  constructor(public payload: any) {
  }
}

export class GetFilterDataActions implements Action {
  type = ActionTypes.GET_FILTER_DATA;

  constructor(public payload: any) {
  }
}

export type Actions = SetFilterDataActions | GetFilterDataActions;

