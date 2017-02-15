import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CUSTOM_RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TemperatureTypeComponent),
  multi: true
};

@Component({
  selector: 'temperature-type',
  templateUrl: './temperature-type.component.html',
  providers: [CUSTOM_RADIO_VALUE_ACCESSOR]
})
export class TemperatureTypeComponent implements ControlValueAccessor {
  items: String[] = ['1', '2'];
  currentValue: string;

  setValue(item: any) {
    this.value = item.target.value;
  }

  set value(newValue) {
    if (newValue) {
      this.currentValue = newValue;
      this.onChange(newValue);
    }
  }

  get value() {
    return this.currentValue;
  }

  onChange = (_: string) => {
  };
  onTouched = () => {
  };

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: string) {
    if (value !== this.currentValue) {
      this.currentValue = value;
    }
  }
}