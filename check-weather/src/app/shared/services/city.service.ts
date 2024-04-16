import { City } from './../types/city-info.interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserGeo, UserGeoService } from './user-geo.service';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cityInfo$ = new BehaviorSubject<City>({ name: '', lat: '', lng: '' });
  constructor(private userGeoService: UserGeoService) {
    this.cityInfo$.next(
      (() => {
        const startGeo: UserGeo = this.userGeoService.getLocation();
        return {
          ...this.cityInfo$.value,
          lat: startGeo.lat,
          lng: startGeo.lng,
        };
      })()
    );
  }

  getCityInfo(): BehaviorSubject<City> {
    return this.cityInfo$;
  }

  setCityInfo(info: City): void {
    this.cityInfo$.next({ ...info });
  }
}
