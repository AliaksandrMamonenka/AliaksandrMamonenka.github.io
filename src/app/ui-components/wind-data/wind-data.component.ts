import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wind-data',
  templateUrl: 'wind-data.component.html'
})
export class WindDataComponent implements OnInit {
  @Input() direction: string;

  ngOnInit() {

    // this is one of the possibilities to dynamically add styles
    // Example: http://stackoverflow.com/questions/33328347/angular2-dynamic-change-css-property
    this.direction = `rotate(${this.direction}deg)`;
  }
}
