import { Action } from '@ngrx/store';

export const ActionTypes = {
  SET_FILTER_DATA: '[FILTER_DATA] SET FILTER_DATA'
};

export class SetFilterDataActions implements Action {
  type = ActionTypes.SET_FILTER_DATA;

  constructor(public payload: any) {
  }
}


export type Actions = SetFilterDataActions;

