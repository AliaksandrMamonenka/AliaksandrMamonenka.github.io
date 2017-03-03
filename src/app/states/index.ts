import { FilterData } from './filter-data.interface';
import { WeatherList } from '../ui-components/weather/weather-list.interface';

export interface InitialState {
  geolocation: Position;
  filterData: FilterData;
  weatherDetails: WeatherList;
}
