import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WeatherList } from '../weather/weather-list.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';
import * as WeatherDetailsActions from '../../actions/weather-details.actions';
import { InitialState } from '../../states';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
})
export class WeatherDetailsComponent implements OnInit {
  cityDetails: WeatherList;

  constructor(private store: Store<InitialState>, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        this.store.dispatch(new WeatherDetailsActions.GetWeatherDetailsActions(params['id']));
      }
    );
  }

  ngOnInit() {
    this.store.select((s: InitialState) => s.weatherDetails)
      .subscribe((cityDetails: any): void => {
      // ;
         this.cityDetails = cityDetails;
      });

  }
}