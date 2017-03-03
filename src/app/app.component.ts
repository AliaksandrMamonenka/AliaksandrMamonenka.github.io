import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// ngrx
import { Store } from '@ngrx/store';
import * as GeolocationActions from './actions/geolocation.actions';
import * as FilterDataActions from './actions/filter-data.actions';
import { InitialState } from './states';

// app styles
import '../../public/css/styles.css';

@Component({
  selector: 'weather-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  position: Position = null;
  toggleWidget: boolean = false;
  time: number = 0;
  togleBtnWidgetName: string = 'Open';

  constructor(private store: Store<InitialState>, private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GeolocationActions.GetGeolocationActions(1));
    this.store.dispatch(new FilterDataActions.GetFilterDataActions(1));
  }

  openWidget() {
    this.toggleWidget = !this.toggleWidget;
    if(this.toggleWidget){
      this.router.navigate([{outlets: {city: null}}]);
      this.togleBtnWidgetName = 'Open';
    }else{
      this.togleBtnWidgetName = 'Close';
      this.router.navigate([{outlets: {city: 'widget'}}]);
    }
  }
}