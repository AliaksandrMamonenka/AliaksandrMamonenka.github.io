import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class FooterComponent {
  year:number = new Date().getTime();
}
