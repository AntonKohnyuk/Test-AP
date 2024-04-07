import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import {
  dailyForecastReducer,
  dailyNode,
} from './store/reducers/daily-forecast.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import {
  hourlyForecastReducer,
  hourlyNode,
} from './store/reducers/hourly-forecast.reducer';
import * as dailyForecastEffects from './store/effects/daily-forecast.effects';
import * as hourlyForecastEffects from './store/effects/hourly-forecast.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: dailyNode, reducer: dailyForecastReducer }),
    provideState({ name: hourlyNode, reducer: hourlyForecastReducer }),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(dailyForecastEffects, hourlyForecastEffects),
  ],
};
