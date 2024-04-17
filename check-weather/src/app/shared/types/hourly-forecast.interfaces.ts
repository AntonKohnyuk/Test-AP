export interface HourDataInterface {
  time_epoch: number;
  time: string;
  temp_c: number;
  is_day: number;
  condition: {
    text: string;
    code: number;
  };
}

export interface ForecastDayData {
  date: string;
  date_epoch: number;
  hour: HourDataInterface[];
}

export interface HourlyForecastInterface {
  location: {
    name: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: string;
  };
  forecast: {
    forecastday: ForecastDayData[];
  };
}
