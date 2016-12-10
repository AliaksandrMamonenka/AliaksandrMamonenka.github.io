import {Component, OnInit, EventEmitter} from '@angular/core';

import '../../public/css/styles.css';

@Component({
  selector: 'weather-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  position: Position = null;
  time: EventEmitter<any> = new EventEmitter(null);
  
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (position: Position): void => {
        let currentTime = new Date().getTime();
        this.position = position;
        this.time.emit(currentTime);
      },
      (error): void => alert(JSON.stringify(error.message))
    );
  }
}
