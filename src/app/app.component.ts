import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from 'components/header.component';
import { version } from '../../package.json';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <header class="header">
      <app-header></app-header>
    </header>

    <main class="main">
      <article>
        <router-outlet />
      </article>
    </main>

    <div class="version">v{{ version }}</div>

    <footer>
      <app-footer></app-footer>
    </footer>
  `,
  styles: `
    @use '@angular/material' as mat;
    @use 'styles.scss';

    .header {
      @include mat.elevation(8);
      position: sticky;
      top: 0px;
      width: 100%;
      min-height: content-fit;
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      box-sizing: inherit;
      background-color: white;
      margin-bottom: 4rem;
      z-index: 1;
    }

    .main {
      z-index: 0;
    }

    .version {
      align-content: center;
      width: fit-content;
      height: 40px;
      position: fixed;
      left: 10px;
      bottom: 0px;
      z-index: 1;
    }
  `,
})
export class AppComponent {
  public version = version;
}
