import { Component, Input } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { SideMenu } from '../../models/header.model';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  imports: [CoreModule],
})
export class SideMenuComponent {
  @Input() sideMenu = {} as SideMenu;
}
