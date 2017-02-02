import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'waGetData'
})
export class GetDataPipe implements PipeTransform {
  transform(value: any) {
    if (!value) return value;
    return `Requested city: ${value.name}, Temperature: ${Math.round(value.main.temp - 273.15)} C`;
  }
}