import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DailyForecastInterface } from '../types/daily-forecast.interfaces';
import { CityService } from './city.service';

@Injectable({
  providedIn: 'root',
})
export class DailyForecastService {
  constructor(
    private http: HttpClient,
    private cityService: CityService
  ) {}

  getForecast(city: string): Observable<DailyForecastInterface> {
    const fullUrl = `${environment.API_URL_DAILY_FORECAST}?city=${city}&key=${environment.API_KEY_DAILY_FORECAST}`;
    return this.http.get<DailyForecastInterface>(fullUrl);
  }
}
