import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [],
  templateUrl: './forecast-card.component.html',
  styleUrl: './forecast-card.component.scss',
})
export class ForecastCardComponent {
  @Input({ required: true }) day!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) temp!: number;
}
