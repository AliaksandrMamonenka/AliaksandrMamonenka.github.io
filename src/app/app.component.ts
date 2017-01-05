import {Component, OnInit, EventEmitter, NgZone} from '@angular/core';
import {ProfilingService} from './services/profiling.service'

import '../../public/css/styles.css';

@Component({
    selector: 'weather-app',
    templateUrl: './app.component.html',
    providers: [ProfilingService]
})
export class AppComponent implements OnInit {
    position: Position = null;
    time: EventEmitter<{}> = new EventEmitter(null);

    constructor(private profiling: ProfilingService) {
    }

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
