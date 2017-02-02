export interface WeatherList {
  name: string;
  favorite?: boolean;

  // fix for AOT :)
  weather?: any;
  main: {
    temp: number;
    pressure: string;
    humidity: string;
  };
}