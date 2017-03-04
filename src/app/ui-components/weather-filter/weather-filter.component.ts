import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityCountsSelect } from './cityCountsSelect.interface';
import { validateCaptcha } from '../../custom-validator/captcha.validator';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';
import { InitialState } from '../../states';
import * as FilterDataActions from '../../actions/filter-data.actions';

@Component({
  selector: 'weather-filter',
  templateUrl: './weather-filter.component.html'
})
export class WeatherFilterComponent implements OnInit {
  @Output() formData = new EventEmitter();
  toggleBtn: boolean = false;
  formGroup: FormGroup;
  cityCountsSelect: CityCountsSelect[];

  constructor(private formBuilder: FormBuilder, private store: Store<InitialState>) {
    this.cityCountsSelect = [
      {name: null, value: null},
      {name: '10 items', value: 10},
      {name: '20 items', value: 20},
      {name: '30 items', value: 30},
      {name: '40 items', value: 40},
      {name: '50 items', value: 50}
    ];
  }

  toggleItem() {
    this.toggleBtn = !this.toggleBtn;
  }

  submitForm(form: FormGroup) {
    this.store.dispatch(new FilterDataActions.SetFilterDataActions(form.value));
    this.toggleBtn = !this.toggleBtn;
    form.reset();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      captcha: ['', validateCaptcha],
      tempType: ['1'],
      cityCounts: [null, Validators.required],
      visibleElements: this.formBuilder.group({
        speed: true,
        direction: true,
        pressure: true
      })
    });
  }
}
