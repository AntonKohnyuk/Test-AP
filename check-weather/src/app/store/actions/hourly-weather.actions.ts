import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { HourlyForecastInterface } from '../../shared/types/hourly-forecast.interfaces';
import { City } from '../../shared/types/city-info.interfaces';

export const getHourlyForecast = createAction(
  ActionTypes.GET_HOURLY_FORECAST,
  props<{ city: City }>()
);

export const getHourlyForecastSuccess = createAction(
  ActionTypes.GET_HOURLY_FORECAST_SUCCESS,
  props<{ forecast: HourlyForecastInterface }>()
);

export const getHourlyForecastFailure = createAction(
  ActionTypes.GET_HOURLY_FORECAST_FAILURE,
  props<{ errMsg: string }>()
);
