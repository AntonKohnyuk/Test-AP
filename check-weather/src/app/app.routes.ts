import { Routes } from '@angular/router';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';

export const routes: Routes = [
  { path: 'weather-forecast', component: WeatherPageComponent },
  { path: '**', redirectTo: '/weather-forecast' },
];
