import { HourlyForecastService } from './../../shared/services/hourly-forecast.service';
import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as HourlyForecastActions from '../actions/hourly-weather.actions';

export const loadHourly = createEffect(
  (
    actions$ = inject(Actions),
    hourlyForecastService = inject(HourlyForecastService)
  ) => {
    return actions$.pipe(
      ofType(HourlyForecastActions.getHourlyForecast),
      exhaustMap(action =>
        hourlyForecastService.getForecast(action.city).pipe(
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
        )
      )
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
