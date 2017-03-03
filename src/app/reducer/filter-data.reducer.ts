import { FilterData } from '../states/filter-data.interface';
import { initialFilterDataState } from '../states/filter-data.states';

import * as FilterDataAction from '../actions/filter-data.actions';


export default function (state = initialFilterDataState, action: FilterDataAction.Actions): FilterData {
  switch (action.type) {
    case FilterDataAction.ActionTypes.SET_FILTER_DATA: {
      const newData = {
        captcha: action.payload.captcha,
        cityCounts: action.payload.cityCounts,
        tempType: action.payload.tempType,
        visibleElements:{
          direction: action.payload.visibleElements.direction,
          pressure: action.payload.visibleElements.pressure,
          speed: action.payload.visibleElements.speed
        }
      };
// ;
      return Object.assign({}, state, newData);
    }

    default:
      return state;
  }
}
