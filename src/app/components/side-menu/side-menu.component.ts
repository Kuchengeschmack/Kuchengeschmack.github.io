import { Component, Input } from '@angular/core';

import { Core } from 'core/index';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  imports: Core,
})
export class SideMenuComponent {
  @Input() sideMenu = [] as Header['menuItems'];
  readonly facebookUrl = 'https://www.facebook.com/mariececile.caron';
}
