import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectDailyTheme } from '../../../store/selectors/daily-forecast.selectors';
import { AsyncPipe, NgStyle } from '@angular/common';
import { WeatherInfo } from '../../types/daily-forecast.interfaces';

@Component({
  selector: 'app-background-layout',
  standalone: true,
  imports: [RouterOutlet, NgStyle, AsyncPipe],
  templateUrl: './background-layout.component.html',
  styleUrl: './background-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundLayoutComponent implements OnInit {
  theme$!: Observable<WeatherInfo | undefined>;

  path: string = '/assets/images/backgrounds/';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.theme$ = this.store.select(selectDailyTheme);
  }

  getImageByCode(info: WeatherInfo): string {
    let imgCode = '';
    if (info.code === 900) imgCode += '900';
    else if (info.code % 800) imgCode += info.code;
    else {
      imgCode += Math.floor(info.code / 10) * 10;
    }
    return `${imgCode}${info.icon.at(-1)}.jpg`;
  }
}
