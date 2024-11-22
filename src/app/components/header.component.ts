import { Component } from '@angular/core';
import header from 'assets/header.json';

import { Core } from 'core/index';
import { SideMenuComponent } from './side-menu.component';
import { TitleComponent } from './title.component';

@Component({
  selector: 'app-header',
  imports: [...Core, TitleComponent, SideMenuComponent],
  standalone: true,
  template: `
    <div class="content">
      <app-title [title]="header.title"></app-title>
      <div class="divider" role="separator" aria-label="Divider"></div>
      <app-side-menu [sideMenu]="header.menuItems"></app-side-menu>
    </div>
  `,
  styles: `
    @media screen and (min-width: 500px) {
      .content {
        display: flex;
        justify-content: space-around;
        max-width: 700px;
      }

      .divider {
        width: 1px;
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
    }

    .content {
      width: 100%;
    }

    .divider {
      background: var(--red-to-pink-to-purple-vertical-gradient);
      margin-inline: 2.5rem;
    }
  `,
})
export class HeaderComponent {
  readonly header = header;
}
