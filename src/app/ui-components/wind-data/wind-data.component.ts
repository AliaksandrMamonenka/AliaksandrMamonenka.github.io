import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'wind-data',
    templateUrl: 'wind-data.component.html'
})
export class WindDataComponent implements OnInit {
    @Input() direction: any;

    ngOnInit() {
        this.direction = `rotate(${this.direction}deg)`;
    }
}
