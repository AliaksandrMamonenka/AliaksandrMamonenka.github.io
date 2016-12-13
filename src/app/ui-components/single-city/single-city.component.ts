import {Component, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'single-city',
    templateUrl: './single-city.component.html',
})
export class SingleCityComponent {
    newVal: string = '';
    result: any = '';

    checkWeather() {
        this.result = this.newVal;
    }
}