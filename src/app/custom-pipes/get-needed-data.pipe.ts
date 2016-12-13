import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'getData'})
export class GetDataPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        if (!value) return value;
        return {
            'City': value.name,
            'Temp': value.main.temp
        };
    }
}