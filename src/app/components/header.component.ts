import { Component } from '@angular/core';
import header from 'assets/header.json';

import { CoreModule } from 'core/core.module';
import { SideMenuComponent } from './side-menu.component';

@Component({
  selector: 'app-header',
  imports: [CoreModule, SideMenuComponent],
  standalone: true,
  template: `
    <div class="content">
      <div class="left-side">
        <h1>{{ header.title }}</h1>
      </div>
      <div class="divider" role="separator" aria-label="Divider"></div>
      <div class="right-side">
        <app-side-menu [sideMenu]="header.menuItems"></app-side-menu>
      </div>
    </div>
  `,
  styles: `
    @media screen and (min-width: 500px) {
      .content {
        display: grid;
        grid-template-columns: 1fr 81px 1fr;
      }

      .divider {
        width: 1px;
        justify-self: center;
      }

      .left-side {
        justify-self: end;
        h1 {
          text-align: right;
        }
      }

      .right-side {
        justify-self: start;
      }
    }

    @media screen and (max-width: 500px) {
      .content {
        display: grid;
        justify-content: start;
      }

      .divider {
        height: 1px;
        writing-mode: vertical-lr;
      }

      .left-side h1 {
        text-align: center;
      }
    }

    .content {
      width: 100%;
    }

    .divider {
      background: var(--red-to-pink-to-purple-vertical-gradient);
      margin-inline: 2.5rem;
    }

    .left-side {
      h1 {
        font-size: 2.125rem;
        color: var(--gray-900);
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.125rem;
        margin: 1.75rem 0 1.75rem;
        font-family:
          'Inter Tight',
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Helvetica,
          Arial,
          sans-serif,
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol';
      }

      p {
        margin: 1.5rem 0 0;
        color: var(--gray-700);
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
})
export class HeaderComponent {
  readonly header = header;
}
