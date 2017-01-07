import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ListOfColors} from './list_of_colors.interface'

@Directive({
    selector: '[tempColor]'
})
export class TemperatureColorDirective implements OnInit {
    @Input('tempColor') tempVal: string;
    listOfColors: ListOfColors = {
        hot: '#FF0000', // 30 +
        very_warm: '#FF6600', //25 - 29
        warm: '#FF9900', //18 - 24
        moderate: '#FFCC00', //10 - 17
        cool: '#FFFF99', //5 - 9
        cold: '#2DD0CB',//-5 - 4
        very_cold: '#2E65FD',//-15 - -6
        freezing: '#3333FF'  //-14 <
    };

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        this.highlight(this.tempVal);
    }

    private highlight(temperature: any) {
        //TODO: do this normally
        temperature = temperature - 273.15;

        let color: string;

        if (temperature >= 30) {
            color = this.listOfColors.hot;
        } else if (temperature >= 25 && temperature <= 29) {
            color = this.listOfColors.very_warm;
        } else if (temperature >= 18 && temperature <= 24) {
            color = this.listOfColors.warm;
        } else if (temperature >= 10 && temperature <= 17) {
            color = this.listOfColors.moderate;
        } else if (temperature >= 5 && temperature <= 9) {
            color = this.listOfColors.cool;
        } else if (temperature >= -5 && temperature <= 4) {
            color = this.listOfColors.cold;
        } else if (temperature >= -15 && temperature <= -6) {
            color = this.listOfColors.very_cold;
        } else {
            color = this.listOfColors.freezing;
        }

        this.el.nativeElement.style.backgroundColor = color;
    }
}
