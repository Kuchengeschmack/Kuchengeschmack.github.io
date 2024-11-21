import { Component } from '@angular/core';
import { HeaderComponent } from 'components/header.component';
import { Core } from '.';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...Core, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
