import {Component, Input} from '@angular/core';

@Component({
    selector: 'favorite-city',
    templateUrl: './favorite-city.component.html'
})

export class FavoriteCityComponent {
    @Input() cityDetails: any;

    constructor() {
    }
}
