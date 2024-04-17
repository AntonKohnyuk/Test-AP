import { HourlyForecastService } from './../../shared/services/hourly-forecast.service';
import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap, withLatestFrom } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as HourlyForecastActions from '../actions/hourly-weather.actions';
import { selectHourlyData } from '../selectors/hourly-forecast.selector';
import { Store, select } from '@ngrx/store';

export const loadHourly = createEffect(
  (
    actions$ = inject(Actions),
    hourlyForecastService = inject(HourlyForecastService),
    store = inject(Store)
  ) => {
    return actions$.pipe(
      ofType(HourlyForecastActions.getHourlyForecast),
      withLatestFrom(store.pipe(select(selectHourlyData))),
      exhaustMap(action => {
        if (
          !(
            Number(action[1]?.location.lat).toFixed(2) ===
              Number(action[0].city.lat).toFixed(2) &&
            Number(action[1]?.location.lon).toFixed(2) ===
              Number(action[0].city.lng).toFixed(2)
          )
        )
          return hourlyForecastService.getForecast(action[0].city).pipe(
            map(forecast =>
              HourlyForecastActions.getHourlyForecastSuccess({ forecast })
            ),
            catchError((error: { message: string }) =>
              of(
                HourlyForecastActions.getHourlyForecastFailure({
                  errMsg: error.message,
                })
              )
            )
          );
        else
          return of(
            HourlyForecastActions.getHourlyForecastSuccess({
              forecast: action[1]!,
            })
          );
      })
    );
  },
  { functional: true }
);

export const displayErrorAlert = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(HourlyForecastActions.getHourlyForecastFailure),
      tap(({ errMsg }) => alert(errMsg))
    );
  },
  { functional: true, dispatch: false }
);
