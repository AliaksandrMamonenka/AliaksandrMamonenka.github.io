import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as GeolocationActions from '../actions/geolocation.actions';
import PositionService from '../services/position.service'

@Injectable()
export class GeolocationEffects {
  constructor(private actions$: Actions, private positionService: PositionService) {
  }

  @Effect() getCoordinates$ = this.actions$
    .ofType(GeolocationActions.ActionTypes.GET_COORDINATES)
    .map(action => action.payload)
    .switchMap(() => this.positionService.getCurrentUserPosition()
      .map((res) => {
        return new GeolocationActions.SetGeolocationActions(res);
      })
    );
}