import { BehaviorSubject } from 'rxjs';
import { CurrentTimeService } from './../../services/current-time.service';
import { Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  imports: [DatePipe, AsyncPipe],
})
export class TitleComponent implements OnInit {
  protected currentTime$!: BehaviorSubject<Date>;

  constructor(private currentTimeService: CurrentTimeService) {}

  ngOnInit(): void {
    this.currentTime$ = this.currentTimeService.getCurrentTime();
  }
}
