import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { HourlyForecastInterface } from '../../shared/types/hourly-forecast.interfaces';

export const getHourlyForecast = createAction(
  ActionTypes.GET_HOURLY_FORECAST,
  props<{ city: string }>()
);

export const getHourlyForecastSuccess = createAction(
  ActionTypes.GET_HOURLY_FORECAST_SUCCESS,
  props<{ forecast: HourlyForecastInterface }>()
);

export const getHourlyForecastFailure = createAction(
  ActionTypes.GET_HOURLY_FORECAST_FAILURE,
  props<{ errMsg: string }>()
);
