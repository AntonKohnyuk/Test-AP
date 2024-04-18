import { Pipe, PipeTransform } from '@angular/core';
import { HourDataInterface } from '../types/hourly-forecast.interfaces';

@Pipe({
  name: 'filterByTime',
  standalone: true,
})
export class FilterByTimePipe implements PipeTransform {
  transform(value: HourDataInterface[]): HourDataInterface[] {
    if (!value) return value;
    const time = new Date();
    return value.filter(el => {
      const elTime = new Date(el.time_epoch * 1000);
      if (elTime.getDay() !== time.getDay()) return true;
      else if (elTime.getHours() >= time.getHours()) return true;
      else return false;
    });
  }
}
