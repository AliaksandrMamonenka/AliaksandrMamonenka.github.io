import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FakeDataProvider} from '../real-time-update/dataProvider';
@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FakeDataProvider]

})

export class HeaderComponent {
    weather = 'weather';
    application = 'APPLICATION';
}
