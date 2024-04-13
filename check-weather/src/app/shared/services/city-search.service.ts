import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CitiesNamesResponse, CityData } from '../types/city-info.interfaces';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitySearchService {
  private apiUrl = 'http://api.geonames.org/searchJSON';
  private username = 'antontestapp';

  constructor(private http: HttpClient) {}

  autocompleteCity(query: string): Observable<CityData[]> {
    const params = new HttpParams()
      .set('name_startsWith', query)
      .set('username', this.username)
      .set('featureClass', 'P')
      .set('maxRows', 5);

    return this.http
      .get<CitiesNamesResponse>(this.apiUrl, { params })
      .pipe(map(response => response.geonames || []));
  }
}
