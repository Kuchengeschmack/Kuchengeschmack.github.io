import { Component } from '@angular/core';
import { HeaderComponent } from 'components/header.component';
import { Core } from '.';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...Core, HeaderComponent],
  template: `
    <header class="header">
      <app-header></app-header>
    </header>

    <main>
      <article>
        <router-outlet />
      </article>
    </main>

    <footer class="footer">
      <p></p>
    </footer>
  `,
  styles: `
    @use 'core/variables.scss';

    .header {
      width: 100%;
      min-height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      box-sizing: inherit;
      position: relative;
    }

    .footer p {
      text-align: center;
    }
  `,
})
export class AppComponent {}
