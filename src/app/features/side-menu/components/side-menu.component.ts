import { Component, inject } from '@angular/core';
import { SideMenuService } from '../services/side-menu.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  imports: [RouterLink]
})
export class SideMenuComponent {
  private readonly sideMenuService = inject(SideMenuService);
  public readonly sideMenu = this.sideMenuService.sideMenu;
}
