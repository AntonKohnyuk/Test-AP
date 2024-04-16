import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DailyForecastInterface } from '../../types/daily-forecast.interfaces';
import { Store } from '@ngrx/store';
import { getDailyForecast } from '../../../store/actions/daily-weather.actions';
import {
  selectDailyData,
  selectDailyError,
  selectDailyIsLoading,
} from '../../../store/selectors/daily-forecast.selectors';
import { AsyncPipe, DatePipe } from '@angular/common';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.scss',
})
export class DailyForecastComponent implements OnInit, OnDestroy {
  city$!: Subscription;
  forecast$!: Observable<DailyForecastInterface | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(
    private store: Store,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.city$ = this.cityService.getCityInfo().subscribe(city => {
      console.log(city);
      this.store.dispatch(getDailyForecast({ city: city }));
    });

    this.forecast$ = this.store.select(selectDailyData);
    this.isLoading$ = this.store.select(selectDailyIsLoading);
    this.error$ = this.store.select(selectDailyError);
  }

  ngOnDestroy(): void {
    this.city$.unsubscribe();
  }
}
