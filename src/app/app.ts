import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from 'app/header/header';
import { Footer } from './footer/footer';

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

    <footer>
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
      z-index: 1;
    }

    .main {
      z-index: 0;
    }
  `,
})
export class App {}
