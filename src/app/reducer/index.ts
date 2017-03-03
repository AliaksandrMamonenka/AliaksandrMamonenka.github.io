import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import geolocationReducer from './geolocation.reducer';
import filterDataReducer from './filter-data.reducer';
import weatherDetailsReducer from './weather-details.reducer';
import { InitialState } from '../states';

const reducers = {
  geolocation: geolocationReducer,
  filterData: filterDataReducer,
  weatherDetails: weatherDetailsReducer
};

const devReducer: ActionReducer<InitialState> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
  return devReducer(state, action);
}
