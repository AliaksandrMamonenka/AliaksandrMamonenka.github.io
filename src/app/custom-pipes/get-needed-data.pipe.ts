import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'getData'})
export class GetDataPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        if (!value) return value;
        return `Requested city: ${value.name}, Temperature: ${value.main.temp} fahrenheit`;
    }
}