import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';
import { InitialState } from '../../states';

@Component({
  selector: 'google-map',
  templateUrl: './google-map-page.component.html'
})
export class GoogleMapPageComponent implements OnInit {
  subscription: Subscription;
  position: Position = null;

  constructor(private store: Store<InitialState>) {
  }

  ngOnInit() {
    this.subscription = this.store.select((s: InitialState) => s.geolocation)
      .subscribe((position: Position): void => {
        this.position = position;
      });
  }
}