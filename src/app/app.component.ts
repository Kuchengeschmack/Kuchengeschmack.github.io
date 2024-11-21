import { Component } from '@angular/core';
import { HeaderComponent } from 'components/header.component';
import { Core } from '.';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...Core, HeaderComponent],
  template: `
    <header class="sticky">
      <div class="version">v{{ version }}</div>
      <app-header class="header"></app-header>
    </header>

    <main class="main">
      <article>
        <router-outlet />
      </article>
    </main>

    <footer class="footer">
      <address>mc-caron.com</address>
    </footer>
  `,
  styles: `
    @use '@angular/material' as mat;
    @use 'core/variables.scss';

    .sticky {
      @include mat.elevation(8);
      position: sticky;
      top: 0px;
      background-color: white;
      margin-bottom: 4rem;
      z-index: 1;
    }

    .header {
      position: relative;
      top: 0px;
      width: 100%;
      min-height: content-fit;
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      box-sizing: inherit;
    }

    .main {
      z-index: 0;
    }

    .version {
      position: relative;
      top: 10px;
      left: 20px;
      width: fit-content;
    }

    .footer {
      width: 100%;
      background-color: white;
      text-align: center;
      position: sticky;
      bottom: 0px;

      p {
        margin-bottom: 0px;
      }
    }
  `,
})
export class AppComponent {
  public version = version;
}
