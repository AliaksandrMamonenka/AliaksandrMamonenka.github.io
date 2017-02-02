import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'waCelsius'})
export class CelsiusPipe implements PipeTransform {
  transform(value: number): any {
    if (!value) return value;

    return Math.round(value - 273.15);
  }
}