import {Component, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'single-city',
  template: `
    <style>
      .single-weather-block {
        width: 300px;
        height: 80px;
        background-color: #2e59bb;
        color: white;
        padding: 5px;
        position: fixed;
        top: 50%;
        margin-top: -40px;
        left: 50%;
        margin-left: -150px;
      }
    </style>

    <div class="single-weather-block"> 
        <h4>City: <span>{{cityData}}</span></h4>
        <!--<h5>Weather: <span>{{cityData.main.temp | celsius}}</span></h5>-->
    </div>`,
})
export class SingleCityComponent {
  @Input() cityData: EventEmitter<any>;
}