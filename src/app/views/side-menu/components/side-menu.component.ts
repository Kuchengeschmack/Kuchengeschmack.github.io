import { Component, inject } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { SideMenuService } from '../services/side-menu.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  imports: [CoreModule],
})
export class SideMenuComponent {
  private readonly sideMenuService = inject(SideMenuService);
  public readonly sideMenu = this.sideMenuService.sideMenu;
}
