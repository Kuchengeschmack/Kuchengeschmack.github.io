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
    .content {
      width: 100%;
      display: grid;
      justify-content: start;
    }

    .divider {
      height: 1px;
      writing-mode: vertical-lr;
      margin-inline: 1rem;
      background: var(--red-to-pink-to-purple-vertical-gradient);
    }

    .left-side {
      text-align: center;
      margin: 1rem 0 1rem;
      h1 {
        font-size: 1.5rem;
        color: var(--gray-900);
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.125rem;
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
      margin: 1rem 0 1rem;
    }

    @media screen and (min-width: 500px) {
      .content {
        grid-template-columns: 1fr 81px 1fr;
      }

      .divider {
        height: 100%;
        width: 1px;
        justify-self: center;
        margin-inline: 2.5rem;
        writing-mode: horizontal-tb;
      }

      .left-side {
        justify-self: end;
        h1 {
          text-align: right;
          font-size: 2.125rem;
        }
      }

      .right-side {
        justify-self: start;
      }
    }
  `,
})
export class HeaderComponent {
  readonly header = header;
}
