import { City } from './../types/city-info.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DailyForecastInterface } from '../types/daily-forecast.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DailyForecastService {
  constructor(private http: HttpClient) {}

  getForecast(city: City): Observable<DailyForecastInterface> {
    let fullUrl = `${environment.API_URL_DAILY_FORECAST}?`;

    if (city.lat || city.lng)
      fullUrl = `${fullUrl}lat=${(+city.lat).toFixed(3)}&lon=${(+city.lng).toFixed(3)}`;
    else fullUrl = `${fullUrl}city=${city.name}`;

    fullUrl = `${fullUrl}&key=${environment.API_KEY_DAILY_FORECAST}`;
    return this.http.get<DailyForecastInterface>(fullUrl);
  }
}
