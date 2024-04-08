import { apies } from './env.save';

export const environment = {
  API_KEY_DAILY_FORECAST: apies.API_KEY_WEATHERBIT,
  API_KEY_HOURLY_FORECAST: apies.API_KEY_WEATHERAPI,
  API_URL_DAILY_FORECAST: 'https://api.weatherbit.io/v2.0/forecast/daily',
  API_URL_HOURLY_FORECAST: 'https://api.weatherapi.com/v1/forecast.json',
};
