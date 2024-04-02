import { Routes } from '@angular/router';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { BackgroundLayoutComponent } from './shared/layout/background-layout/background-layout.component';

export const routes: Routes = [
  {
    path: 'weather-forecast',
    component: BackgroundLayoutComponent,
    children: [{ path: '', component: WeatherPageComponent }],
  },
  { path: '**', redirectTo: '/weather-forecast' },
];
