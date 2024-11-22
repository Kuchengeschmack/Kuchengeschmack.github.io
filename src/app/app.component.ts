import { Component } from '@angular/core';
import { HeaderComponent } from 'components/header.component';
import { version } from '../../package.json';
import { Core } from './core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...Core, HeaderComponent],
  template: `
    <header class="header">
      <app-header></app-header>
    </header>

    <main class="main">
      <article>
        <router-outlet />
      </article>
    </main>

    <footer class="footer">
      <address class="address">mc-caron.com</address>
      <div class="version">v{{ version }}</div>
    </footer>
  `,
  styles: `
    @use '@angular/material' as mat;
    @use 'core/variables.scss';

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
      position: fixed;
      left: 20px;
      align-content: center;
      width: fit-content;
    }

    .address {
      width: fit-content;
      align-content: center;
    }

    .footer {
      display: flex;
      width: 100%;
      height: 40px;
      background-color: white;
      text-align: center;
      justify-content: center;
      position: sticky;
      bottom: 0px;
    }
  `,
})
export class AppComponent {
  public version = version;
}
