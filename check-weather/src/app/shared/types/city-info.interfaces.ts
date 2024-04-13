export interface CityData {
  name: string;
  countryName: string;
  lat: string;
  lng: string;
}

export interface CitiesNamesResponse {
  geonames: CityData[];
}
