import {Component} from '@angular/core';
import {FakeDataProvider} from '../real-time-update/dataProvider';
@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    providers: [FakeDataProvider]

})

export class HeaderComponent {
    weather = 'weather';
    application = 'APPLICATION';
}
