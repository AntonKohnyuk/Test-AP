import { Component } from '@angular/core';
import { GoogleCalendarComponent } from '../../shared/components/google-calendar/google-calendar.component';
import { DailyForecastComponent } from '../../shared/components/daily-forecast/daily-forecast.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { CommonButtonComponent } from '../../shared/components/common-button/common-button.component';
import { HourlyForecastComponent } from '../../shared/components/hourly-forecast/hourly-forecast.component';
import { ForecastModeEnum } from '../../shared/enums/forecast-mode.enum';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [
    GoogleCalendarComponent,
    DailyForecastComponent,
    SearchComponent,
    TitleComponent,
    CommonButtonComponent,
    HourlyForecastComponent,
  ],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.scss',
})
export class WeatherPageComponent {
  forecastMode: string = ForecastModeEnum.DAILY;
  modes = ForecastModeEnum;

  constructor() {}

  changeForecastToHourly() {
    this.forecastMode = ForecastModeEnum.HOURLY;
  }

  changeForecastToDaily() {
    this.forecastMode = ForecastModeEnum.DAILY;
  }
}
