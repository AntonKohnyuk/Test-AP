import { Component } from '@angular/core';
import { CommonButtonComponent } from '../common-button/common-button.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonButtonComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {}
