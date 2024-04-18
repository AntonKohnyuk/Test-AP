import { Routes } from '@angular/router';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { BackgroundLayoutComponent } from './shared/layout/background-layout/background-layout.component';

export const routes: Routes = [
  {
    path: 'forecast',
    component: BackgroundLayoutComponent,
    title: 'Forecast',
    children: [
      {
        path: '',
        component: WeatherPageComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'forecast' },
];
