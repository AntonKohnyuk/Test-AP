import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectDailyTheme } from '../../../store/selectors/daily-forecast.selectors';
import { AsyncPipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-background-layout',
  standalone: true,
  imports: [RouterOutlet, NgStyle, AsyncPipe],
  templateUrl: './background-layout.component.html',
  styleUrl: './background-layout.component.scss',
})
export class BackgroundLayoutComponent implements OnInit {
  theme$!: Observable<string | undefined>;
  defaultTheme: string =
    'https://wallpapers.com/images/hd/sunny-background-fjtx5v635w5hu6tg.jpg';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.theme$ = this.store.select(selectDailyTheme);
  }
}
