import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentTimeService {
  private currentTime$: BehaviorSubject<Date>;
  constructor() {
    this.currentTime$ = new BehaviorSubject(new Date());

    interval(1000)
      .pipe(map(() => new Date()))
      .subscribe(time => this.currentTime$.next(time));
  }

  getCurrentTime(): BehaviorSubject<Date> {
    return this.currentTime$;
  }
}
