import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { getHourlyForecast } from '../../../store/actions/hourly-weather.actions';
import {
  selectHourlyData,
  selectHourlyIsLoading,
  selectHourlyError,
} from '../../../store/selectors/hourly-forecast.selector';
import { CityService } from '../../services/city.service';
import { ForecastDayData } from '../../types/hourly-forecast.interfaces';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-hourly-forecast',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './hourly-forecast.component.html',
  styleUrl: './hourly-forecast.component.scss',
})
export class HourlyForecastComponent implements OnInit {
  city$!: Subscription;
  forecast$!: Observable<ForecastDayData | undefined>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(
    private store: Store,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.city$ = this.cityService.getCityInfo().subscribe(city => {
      this.store.dispatch(getHourlyForecast({ city }));
    });

    this.forecast$ = this.store.select(selectHourlyData);
    this.isLoading$ = this.store.select(selectHourlyIsLoading);
    this.error$ = this.store.select(selectHourlyError);
  }
}
