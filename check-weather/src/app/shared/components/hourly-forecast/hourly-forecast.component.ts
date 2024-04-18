import { SyncIconsService } from './../../services/sync-icons.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { getHourlyForecast } from '../../../store/actions/hourly-weather.actions';
import {
  selectHourlyIsLoading,
  selectHourlyError,
  selectHourlyDataOfDay,
} from '../../../store/selectors/hourly-forecast.selector';
import { CityService } from '../../services/city.service';
import { ForecastDayData } from '../../types/hourly-forecast.interfaces';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { trigger, transition, style, animate } from '@angular/animations';
import { FilterByTimePipe } from '../../pipes/filter-by-time.pipe';

@Component({
  selector: 'app-hourly-forecast',
  standalone: true,
  imports: [AsyncPipe, DatePipe, MatProgressBarModule, FilterByTimePipe],
  templateUrl: './hourly-forecast.component.html',
  styleUrl: './hourly-forecast.component.scss',

  animations: [
    trigger('enterTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
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

    this.forecast$ = this.store.select(selectHourlyDataOfDay);
    this.isLoading$ = this.store.select(selectHourlyIsLoading);
    this.error$ = this.store.select(selectHourlyError);
  }

  ngOnDestroy(): void {
    this.city$.unsubscribe();
  }
}
