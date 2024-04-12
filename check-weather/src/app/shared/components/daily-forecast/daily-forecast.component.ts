import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyForecastInterface } from '../../types/daily-forecast.interfaces';
import { Store } from '@ngrx/store';
import { getDailyForecast } from '../../../store/actions/daily-weather.actions';
import {
  selectDailyData,
  selectDailyError,
  selectDailyIsLoading,
} from '../../../store/selectors/daily-forecast.selectors';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.scss',
})
export class DailyForecastComponent implements OnInit {
  city!: string;
  forecast$!: Observable<DailyForecastInterface | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getDailyForecast({ city: 'Minsk' }));
    this.forecast$ = this.store.select(selectDailyData);
    this.isLoading$ = this.store.select(selectDailyIsLoading);
    this.error$ = this.store.select(selectDailyError);
  }
}
