export interface CitiesNamesResponse {
  geonames: CityData[];
}

export interface City {
  name: string;
  lat: string;
  lng: string;
}

export interface CityData extends City {
  countryName: string;
}
