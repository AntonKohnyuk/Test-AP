import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-background-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './background-layout.component.html',
  styleUrl: './background-layout.component.scss',
})
export class BackgroundLayoutComponent {}
