import { createReducer, on } from '@ngrx/store';
import * as DailyForecastActions from '../actions/daily-weather.actions';
import { DailyForecastInterface } from '../../shared/types/daily-forecast.interfaces';

export const dailyNode = 'daily';

export interface DailyForecastState {
  data: DailyForecastInterface | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: DailyForecastState = {
  data: null,
  isLoading: false,
  error: null,
};

export const dailyForecastReducer = createReducer(
  initialState,
  on(
    DailyForecastActions.getDailyForecast,
    (state): DailyForecastState => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(
    DailyForecastActions.getDailyForecastSuccess,
    (state, { forecast }): DailyForecastState => ({
      ...state,
      data: forecast,
      isLoading: false,
      error: null,
    })
  ),
  on(
    DailyForecastActions.getDailyForecastFailure,
    (state): DailyForecastState => ({ ...state, isLoading: false })
  )
);
