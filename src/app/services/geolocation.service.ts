import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  requestLocation(callback) {
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords);
      }, error => {
        callback(null);
      }
    )

  }

  getMapLink(location: PlaceLocation) {
    let query = '';
    if (location.latitude) {
      query = location.latitude + ',' + location.longitude;
    } else {
      query = `${location.address}, ${location.city}`;
    }
    if (/iPad|iPod|iPhone/.test(navigator.userAgent)) {
      return `https://maps.apple.com/?q=${query}`;
    } else {
      return `https://maps.google.com/?q=${query}`;
    }

  }
}