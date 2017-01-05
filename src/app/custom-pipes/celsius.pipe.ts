import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'celsius'})
export class CelsiusPipe implements PipeTransform {
    transform(value: number, args: string[]): any {
        if (!value) return value;

        return Math.round(value - 273.15);
    }
}