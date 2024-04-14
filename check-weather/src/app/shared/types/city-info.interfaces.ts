export interface CityData {
  name: string;
  countryName: string;
  lat: string;
  lng: string;
}

export interface CitiesNamesResponse {
  geonames: CityData[];
}

export interface City {
  name: string;
  lat: string;
  lng: string;
}
