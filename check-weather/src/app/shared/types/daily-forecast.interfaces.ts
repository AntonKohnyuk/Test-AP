export interface DailyForecastData {
  ts: number;
  valid_date: string;
  temp: number;
  weather: {
    icon: string;
    description: string;
  };
}

export interface DailyForecastInterface {
  city_name: string;
  lat: string;
  lon: string;
  data: DailyForecastData[];
}
