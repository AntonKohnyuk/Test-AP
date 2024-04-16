import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HourlyForecastInterface } from '../types/hourly-forecast.interfaces';
import { City } from '../types/city-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HourlyForecastService {
  constructor(private http: HttpClient) {}

  getForecast(city: City): Observable<HourlyForecastInterface> {
    let fullUrl = `${environment.API_URL_HOURLY_FORECAST}?`;
    `q=${city}&days=1&key=${environment.API_KEY_HOURLY_FORECAST}`;

    if (city.lat || city.lng)
      fullUrl = `${fullUrl}q=${(+city.lat).toFixed(3)},${(+city.lng).toFixed(3)}`;
    else fullUrl = `${fullUrl}q=${city.name}`;

    fullUrl = `${fullUrl}&key=${environment.API_KEY_HOURLY_FORECAST}`;

    return this.http.get<HourlyForecastInterface>(fullUrl);
  }
}
