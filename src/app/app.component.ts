import { Component } from '@angular/core';

import { CoreModule } from './core/core.module';
import { ViewsModule } from './views/views.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, ViewsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
