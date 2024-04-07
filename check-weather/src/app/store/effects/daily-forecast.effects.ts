import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DailyForecastService } from '../../shared/services/daily-forecast.service';
import * as DailyForecastActions from '../actions/daily-weather.actions';

export const loadDaily = createEffect(
  (
    actions$ = inject(Actions),
    dailyForecastService = inject(DailyForecastService)
  ) => {
    return actions$.pipe(
      ofType(DailyForecastActions.getDailyForecast),
      exhaustMap(action =>
        dailyForecastService.getForecast(action.city).pipe(
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
        )
      )
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
