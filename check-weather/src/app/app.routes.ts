import { Routes } from '@angular/router';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { BackgroundLayoutComponent } from './shared/layout/background-layout/background-layout.component';
import { DailyForecastComponent } from './shared/components/daily-forecast/daily-forecast.component';
import { HourlyForecastComponent } from './shared/components/hourly-forecast/hourly-forecast.component';

export const routes: Routes = [
  {
    path: 'forecast',
    component: BackgroundLayoutComponent,
    children: [
      {
        path: '',
        component: WeatherPageComponent,
        children: [
          { path: 'daily', component: DailyForecastComponent },
          { path: 'hourly', component: HourlyForecastComponent },
          { path: '**', redirectTo: 'daily' },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '/forecast' },
];
