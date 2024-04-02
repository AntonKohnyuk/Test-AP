import { Component } from '@angular/core';
import { ForecastCardComponent } from '../../shared/components/forecast-card/forecast-card.component';
import { GoogleCalendarComponent } from '../../shared/components/google-calendar/google-calendar.component';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [ForecastCardComponent, GoogleCalendarComponent],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.scss',
})
export class WeatherPageComponent {
  public forecastElemnts = [
    { day: 'Tuesday', icon: '01d', temp: 20 },
    { day: 'Monday', icon: '04d', temp: 22 },
    { day: 'Tuesday', icon: '04d', temp: 23 },
    { day: 'Friday', icon: '04d', temp: 22 },
    { day: 'Tuesday', icon: '04d', temp: 26 },
    { day: 'Sunday', icon: '04d', temp: 27 },
    { day: 'Tuesday', icon: '04d', temp: 28 },
  ];
}
