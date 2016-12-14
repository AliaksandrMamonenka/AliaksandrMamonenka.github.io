import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html'
})

export class FooterComponent {
  year:number = new Date().getTime();
}
