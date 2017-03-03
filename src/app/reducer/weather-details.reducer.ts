import { WeatherList } from '../ui-components/weather/weather-list.interface';
import { initialWeatherDetailsDataState } from '../states/weather-details.states';

import * as WeatherDetailsAction from '../actions/weather-details.actions';


export default function (state = initialWeatherDetailsDataState, action: WeatherDetailsAction.Actions): WeatherList {

  switch (action.type) {
    case WeatherDetailsAction.ActionTypes.SET_WEATHER_DETAILS: {
      const newData = {
        id: action.payload.id,
        name: action.payload.name,
        favorite: action.payload.favorite,
        weather: action.payload.weather,
        main: {
          temp: action.payload.main.temp,
          pressure: action.payload.main.pressure,
          humidity: action.payload.main.humidity
        }
      };
;
      return Object.assign({}, state, newData);
    }

    default:
      return state;
  }
}
