import {Pipe, PipeTransform} from '@angular/core';
import {config} from '../config/app.config';
@Pipe({
    name: 'CityWeather'
})
export class CityWeatherPipe implements PipeTransform {
    // usedCity:any[];

    getPromiseData(name: string) {
        return new Promise(resolve => {
            const APPID: string = config.weatherId;
            let url: string = 'http://api.openweathermap.org/data/2.5/weather?q={' + name + '}&appid=' + APPID;

            fetch(url).then((response) => response.json())
                .then((json: any) => {
                    // this.usedCity.push(json);
                    resolve(json);
                })
                .catch((ex: any) => {
                    console.warn(`Something went wrong: ${ex} !!!`);
                });
        })
    }

    transform(city: string) {
        if (city) {

            // не дописал сохранение погоды для повторного города
            // for (let item of this.usedCity) {
            //     if(item.name == city){
            //         return item
            //     }
            // }

            return this.getPromiseData(city);
        }
    }
}