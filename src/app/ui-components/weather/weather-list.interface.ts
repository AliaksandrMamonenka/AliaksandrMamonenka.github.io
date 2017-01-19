export interface WeatherList {
    name: string;
    favorite?: boolean;
    main: {
        temp: string;
        pressure: string;
        humidity: string;
    };
}