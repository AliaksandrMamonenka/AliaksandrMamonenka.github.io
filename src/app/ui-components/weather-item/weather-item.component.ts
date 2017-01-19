// import {Component, Input, OnInit} from '@angular/core';
// import {ModifiedList} from './modifiedList.interface';
//
// @Component({
//     selector: 'weather-item',
//     templateUrl: 'weather-item.component.html'
// })
//
// export class WeatherItemComponent implements OnInit {
//     @Input() weatherData: any;
//     favoriteCityDetails: ModifiedList;
//
//     ngOnInit() {
//     }
//
//     makeFavorite(weatherData: any): void {
//         debugger;
//         if (this.favoriteCityDetails) {
//             this.favoriteCityDetails.favorite = false;
//         }
//
//         weatherData.favorite = !weatherData.favorite;
//         this.favoriteCityDetails = weatherData;
//     }
//
//     // removeItem(itemIndex: any) {
//     //     this.cityList.splice(itemIndex, 1);
//     // }
// }
