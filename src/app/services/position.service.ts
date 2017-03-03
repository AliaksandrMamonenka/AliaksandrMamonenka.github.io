import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class PositionService {
    getCurrentUserPosition(): Observable<any> {
    const promise = new Promise(function (onSuccess, onError) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          onSuccess(position);
        }, (error: PositionError) => {
          onError(error);
        });
    });

    return Observable.fromPromise(promise);
  }
}
