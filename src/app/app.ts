import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './footer/footer';
import { Header } from './header/header';

@Component({
  selector: 'art-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <header class="header">
      <art-header></art-header>
    </header>

    <main class="main">
      <router-outlet />
    </main>

    <footer class="footer">
      <art-footer></art-footer>
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
      box-sizing: border-box;
      background-color: white;
      margin-bottom: 1rem;
      box-sizing: border-box;
      z-index: 1;
    }

    .main {
      box-sizing: border-box;
    }

    .footer {
      box-sizing: border-box;
    }
  `,
})
export class App {}
