import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { DailyForecastInterface } from '../../shared/types/daily-forecast.interfaces';
import { City } from '../../shared/types/city-info.interfaces';

export const getDailyForecast = createAction(
  ActionTypes.GET_DAILY_FORECAST,
  props<{ city: City }>()
);

export const getDailyForecastSuccess = createAction(
  ActionTypes.GET_DAILY_FORECAST_SUCCESS,
  props<{ forecast: DailyForecastInterface }>()
);

export const getDailyForecastFailure = createAction(
  ActionTypes.GET_DAILY_FORECAST_FAILURE,
  props<{ errMsg: string }>()
);
