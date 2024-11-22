import { Component } from '@angular/core';
import header from 'assets/header.json';

import { Core } from 'core/index';
import { SideMenuComponent } from './side-menu/side-menu.component';
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
        width: 100%;
        max-width: 700px;
      }

      .divider {
        width: 1px;
        background: var(--red-to-pink-to-purple-vertical-gradient);
        margin-inline: 1.5rem;
      }
    }

    @media screen and (max-width: 500px) {
      .content {
        display: grid;
        justify-content: start;
        width: 100%;
      }

      .divider {
        height: 1px;
        background: var(--red-to-pink-to-purple-vertical-gradient);
        margin-inline: 1.5rem;
        writing-mode: vertical-lr;
      }
    }
  `,
})
export class HeaderComponent {
  readonly header = header;
}
