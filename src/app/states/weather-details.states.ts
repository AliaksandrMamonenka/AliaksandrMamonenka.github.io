import { WeatherList } from '../ui-components/weather/weather-list.interface'

export const initialWeatherDetailsDataState: WeatherList = {
  id: null,
  name: "",
  favorite: false,
  weather: null,
  main:{
    temp:null,
    pressure: "",
    humidity: ""
  }
};