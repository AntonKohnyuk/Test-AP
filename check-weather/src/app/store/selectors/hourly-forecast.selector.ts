import {
  HourlyForecastState,
  hourlyNode,
} from '../reducers/hourly-forecast.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectHourlyFeature =
  createFeatureSelector<HourlyForecastState>(hourlyNode);

export const selectHourlyData = createSelector(
  selectHourlyFeature,
  forecast => forecast.data?.forecast.forecastday[0]
);

export const selectHourlyIsLoading = createSelector(
  selectHourlyFeature,
  forecast => forecast.isLoading
);

export const selectHourlyError = createSelector(
  selectHourlyFeature,
  forecast => forecast.error
);
