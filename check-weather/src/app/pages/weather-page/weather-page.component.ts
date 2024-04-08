import { Component } from '@angular/core';
import { ForecastCardComponent } from '../../shared/components/forecast-card/forecast-card.component';
import { GoogleCalendarComponent } from '../../shared/components/google-calendar/google-calendar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [ForecastCardComponent, GoogleCalendarComponent, RouterOutlet],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.scss',
})
export class WeatherPageComponent {}
