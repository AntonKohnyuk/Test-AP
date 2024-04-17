import { createSelector, createFeatureSelector } from '@ngrx/store';
import {
  DailyForecastState,
  dailyNode,
} from '../reducers/daily-forecast.reducer';

export const selectDailyFeature =
  createFeatureSelector<DailyForecastState>(dailyNode);

export const selectDailyData = createSelector(
  selectDailyFeature,
  forecast => forecast.data
);

export const selectDailyIsLoading = createSelector(
  selectDailyFeature,
  forecast => forecast.isLoading
);

export const selectDailyError = createSelector(
  selectDailyFeature,
  forecast => forecast.error
);

export const selectDailyTheme = createSelector(
  selectDailyFeature,
  forecast => forecast.data?.data[0].weather
);
