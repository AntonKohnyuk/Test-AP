import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HourlyForecastInterface } from '../types/hourly-forecast.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HourlyForecastService {
  constructor(private http: HttpClient) {}

  getForecast(city: string): Observable<HourlyForecastInterface> {
    const fullUrl = `${environment.API_URL_HOURLY_FORECAST}?q=${city}&days=1&key=${environment.API_KEY_HOURLY_FORECAST}`;
    console.log(fullUrl);
    return this.http.get<HourlyForecastInterface>(fullUrl);
  }
}
