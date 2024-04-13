import { Component, OnInit } from '@angular/core';
import { CommonButtonComponent } from '../common-button/common-button.component';
import { CitySearchService } from '../../services/city-search.service';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { CityData } from '../../types/city-info.interfaces';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonButtonComponent, ReactiveFormsModule, NgFor, AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  search = new FormControl();
  cities$!: Observable<CityData[]>;

  constructor(private citySearchService: CitySearchService) {}

  ngOnInit(): void {
    this.cities$ = this.search.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.citySearchService.autocompleteCity(query))
    );
  }
}
