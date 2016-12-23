import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {
    weather = 'weather';
    application = 'APPLICATION';
}
