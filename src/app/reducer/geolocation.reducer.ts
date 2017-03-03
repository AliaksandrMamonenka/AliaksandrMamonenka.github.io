import { initialGeolocationState } from '../states/geolocation.states';
import * as GeoLocationAction from '../actions/geolocation.actions';


export default function (state = initialGeolocationState, action: GeoLocationAction.Actions): Position {
  switch (action.type) {
    case GeoLocationAction.ActionTypes.SET_COORDINATES: {
      const newData = {
        coords: action.payload.coords,
        timestamp: action.payload.timestamp
      };

      return Object.assign({}, state, newData);
    }

    default:
      return state;
  }
}
