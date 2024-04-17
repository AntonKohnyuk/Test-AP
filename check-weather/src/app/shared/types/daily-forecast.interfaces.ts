export interface WeatherInfo {
  code: number;
  icon: string;
  description: string;
}

export interface DailyForecastData {
  ts: number;
  valid_date: string;
  temp: number;
  weather: WeatherInfo;
}

export interface DailyForecastInterface {
  city_name: string;
  lat: string;
  lon: string;
  data: DailyForecastData[];
}
