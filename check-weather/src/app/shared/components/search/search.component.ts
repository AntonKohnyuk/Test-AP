import { City, CityData } from './../../types/city-info.interfaces';
import { Component, OnInit } from '@angular/core';
import { CommonButtonComponent } from '../common-button/common-button.component';
import { CitySearchService } from '../../services/city-search.service';
import { Observable, distinctUntilChanged, map, switchMap, tap } from 'rxjs';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgFor } from '@angular/common';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonButtonComponent,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  checkedCity: City = {
    name: '',
    lat: '',
    lng: '',
  };

  search = new FormControl(this.checkedCity.name);

  cities$!: Observable<CityData[]>;

  constructor(
    private citySearchService: CitySearchService,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.cities$ = this.search.valueChanges.pipe(
      distinctUntilChanged(),
      map((value: string | null | CityData) =>
        typeof value === 'string' ? value : value!.name
      ),
      tap(value => this.search.setValue(value)),
      switchMap(query => this.citySearchService.autocompleteCity(query || '')),
      tap(
        value =>
          (this.checkedCity = {
            name: value[0]?.name || this.search.value!,
            lat: this.checkedCity.lat || value[0]?.lat || '',
            lng: this.checkedCity.lng || value[0]?.lng || '',
          })
      )
    );
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const selectedOption = event.option.value as CityData;
    this.checkedCity = {
      ...this.checkedCity,
      name: selectedOption.name,
      lat: selectedOption.lat,
      lng: selectedOption.lng,
    };
  }

  searchCity() {
    this.search.setValue(this.checkedCity.name);
    this.cityService.setCityInfo({ ...this.checkedCity });
  }
}
