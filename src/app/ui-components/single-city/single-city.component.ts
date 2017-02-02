import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ComponentType } from './../../component-type.interface';

@Component({
  selector: 'single-city',
  templateUrl: './single-city.component.html',
})
export class SingleCityComponent {
  @Input() componentData: ComponentType;
  @Output() cityUpdated = new EventEmitter();

  newCityName: string;
  result: any = null;

  addCityItem() {
    if (this.componentData.isAddCity) {
      this.cityUpdated.emit(this.newCityName);
    } else {
      this.result = this.newCityName;
    }
  }
}