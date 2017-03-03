import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { config } from "../config/app.config";

@Injectable()
export class WeatherService {
  private serverUrl = 'http://api.openweathermap.org/data/2.5/';
  private APPID: string = config.weatherId;


  constructor(private http: Http) {
  }

  private extractData(res: Response) {
    let body = res.json();

    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

  // public API
  getWeatherDataFromServer(lat: number, lon: number, cnt: string): Observable<any> {
    let url: string = this.serverUrl + 'find?lat=' + lat + '&lon=' + lon + '&cnt=' + cnt + '&appid=' + this.APPID;

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSingleDataFromServerById(id: number): Observable<any> {
    let url: string = this.serverUrl + 'weather?id=' + id + '&appid=' + this.APPID;

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSingleDataFromServerByPosition(lat: number, lon: number): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let url: string = this.serverUrl + 'weather';
    let options = new RequestOptions({
      headers: headers,
      search: new URLSearchParams('lat=' + lat + '&lon=' + lon + '&appid=' + this.APPID)
    });

    return this.http.get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
