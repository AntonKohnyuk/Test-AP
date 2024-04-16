import { Injectable } from '@angular/core';

export interface UserGeo {
  lat: string;
  lng: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserGeoService {
  userGeo: UserGeo = {
    lat: '51.509865',
    lng: '-0.1277583',
  };

  constructor() {}

  getLocation(): UserGeo {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.userGeo = {
            lat: `${position.coords.latitude}`,
            lng: `${position.coords.longitude}`,
          };
        },
        error => {
          alert(error.message);
        }
      );
    }

    return this.userGeo;
  }
}
