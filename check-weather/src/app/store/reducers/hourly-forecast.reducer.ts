import { createReducer, on } from '@ngrx/store';
import * as HourlyForecastActions from '../actions/hourly-weather.actions';
import { HourlyForecastInterface } from '../../shared/types/hourly-forecast.interfaces';

export const hourlyNode = 'hourly';

export interface HourlyForecastState {
  data: HourlyForecastInterface | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: HourlyForecastState = {
  data: null,
  isLoading: false,
  error: null,
};

export const hourlyForecastReducer = createReducer(
  initialState,
  on(
    HourlyForecastActions.getHourlyForecast,
    (state): HourlyForecastState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    HourlyForecastActions.getHourlyForecastSuccess,
    (state, { forecast }): HourlyForecastState => ({
      ...state,
      data: forecast,
      isLoading: false,
    })
  ),
  on(
    HourlyForecastActions.getHourlyForecastFailure,
    (state, { errMsg }): HourlyForecastState => ({
      ...state,
      isLoading: false,
      error: errMsg,
    })
  )
);
