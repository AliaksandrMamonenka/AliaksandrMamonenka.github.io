import { Component, Input } from '@angular/core';
@Component({
  selector: 'weather-filter-error-handling',
  templateUrl: './weather-filter-error-handling.component.html'
})
export class WeatherFilterErrorHandlingComponent {
  @Input() errorObject: FormData;
  @Input() errorMsg: String;
}
