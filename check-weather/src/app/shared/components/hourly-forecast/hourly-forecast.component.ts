import { SyncIconsService } from './../../services/sync-icons.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class HourlyForecastComponent implements OnInit, OnDestroy {
  private city$!: Subscription;
  protected forecast$!: Observable<ForecastDayData | undefined>;
  protected isLoading$!: Observable<boolean>;
  protected error$!: Observable<string | null>;

  protected basicPathToIcons = '../../../../assets/images/icons/forecast/';

  constructor(
    private store: Store,
    private cityService: CityService,
    protected syncIconsService: SyncIconsService
  ) {}

  ngOnInit(): void {
    this.city$ = this.cityService.getCityInfo().subscribe(city => {
      this.store.dispatch(getHourlyForecast({ city }));
    });

    this.forecast$ = this.store.select(selectHourlyData);
    this.isLoading$ = this.store.select(selectHourlyIsLoading);
    this.error$ = this.store.select(selectHourlyError);
  }

  ngOnDestroy(): void {
    this.city$.unsubscribe();
  }
}
