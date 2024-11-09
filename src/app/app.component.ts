import { Component } from '@angular/core';

import { Core } from './core';
import { Views } from './views';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...Core, ...Views],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
