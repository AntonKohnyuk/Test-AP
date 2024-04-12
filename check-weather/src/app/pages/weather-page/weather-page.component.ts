import { Component } from '@angular/core';
import { ForecastCardComponent } from '../../shared/components/forecast-card/forecast-card.component';
import { GoogleCalendarComponent } from '../../shared/components/google-calendar/google-calendar.component';
import { DailyForecastComponent } from '../../shared/components/daily-forecast/daily-forecast.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { CommonButtonComponent } from '../../shared/components/common-button/common-button.component';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [
    ForecastCardComponent,
    GoogleCalendarComponent,
    DailyForecastComponent,
    SearchComponent,
    TitleComponent,
    CommonButtonComponent,
  ],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.scss',
})
export class WeatherPageComponent {
  cityName: string = 'Minsk';

  constructor() {}
}
