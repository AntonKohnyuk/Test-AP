export interface DailyForecastData {
  valid_date: string;
  temp: number;
  weather: {
    icon: string;
    description: string;
  };
}

export interface DailyForecastInterface {
  city_name: string;
  data: DailyForecastData[];
}
