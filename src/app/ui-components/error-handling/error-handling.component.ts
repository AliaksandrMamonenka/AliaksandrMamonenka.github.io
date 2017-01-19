import { Component, Input } from '@angular/core';

@Component({
    selector: 'error-handling',
    templateUrl: './error-handling.component.html'
})

export class ErrorHandlingComponent {
    @Input() errorMessage: string;
}
