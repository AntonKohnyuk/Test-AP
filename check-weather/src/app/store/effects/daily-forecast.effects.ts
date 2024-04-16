import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap, withLatestFrom } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DailyForecastService } from '../../shared/services/daily-forecast.service';
import * as DailyForecastActions from '../actions/daily-weather.actions';
import { Store, select } from '@ngrx/store';
import { selectDailyData } from '../selectors/daily-forecast.selectors';

export const loadDaily = createEffect(
  (
    actions$ = inject(Actions),
    dailyForecastService = inject(DailyForecastService),
    store = inject(Store)
  ) => {
    return actions$.pipe(
      ofType(DailyForecastActions.getDailyForecast),
      withLatestFrom(store.pipe(select(selectDailyData))),
      exhaustMap(action => {
        if (
          !(
            Number(action[1]?.lat).toFixed(3) ===
              Number(action[0].city.lat).toFixed(3) &&
            Number(action[1]?.lon).toFixed(3) ===
              Number(action[0].city.lng).toFixed(3)
          )
        )
          return dailyForecastService.getForecast(action[0].city).pipe(
            map(forecast =>
              DailyForecastActions.getDailyForecastSuccess({ forecast })
            ),
            catchError((error: { message: string }) =>
              of(
                DailyForecastActions.getDailyForecastFailure({
                  errMsg: error.message,
                })
              )
            )
          );
        else
          return of(
            DailyForecastActions.getDailyForecastSuccess({
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
      ofType(DailyForecastActions.getDailyForecastFailure),
      tap(({ errMsg }) => alert(errMsg))
    );
  },
  { functional: true, dispatch: false }
);
