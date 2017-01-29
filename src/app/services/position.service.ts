import { Injectable } from '@angular/core';

@Injectable()
export class PositionService {
  getCurrentUserPosition() {
    return new Promise(function (onSuccess, onError) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          onSuccess(position);
        }, (error: PositionError) => {
          onError(error);
        });
    });
  }
}
