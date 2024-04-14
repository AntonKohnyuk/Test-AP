import { City } from './../types/city-info.interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cityInfo$ = new BehaviorSubject<City>({ name: '', lat: '', lng: '' });
  constructor() {}

  getCityInfo(): BehaviorSubject<City> {
    return this.cityInfo$;
  }

  setCityInfo(info: City): void {
    this.cityInfo$.next({ ...info });
  }
}
