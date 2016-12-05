import { Component, OnInit } from '@angular/core';

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  }
}

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html'
})

export class MapComponent extends OnInit{
  lat: number;
  lng: number;

  success = (position: Position) => {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  };

  error = () => {
    console.warn('ERROR: happened something bad, try again. Could you please...');
  };

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(this.success, this.error);
  }
}
