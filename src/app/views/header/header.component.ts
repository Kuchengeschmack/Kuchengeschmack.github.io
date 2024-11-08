import { Component, inject } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TitleComponent } from './components/title/title.component';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  imports: [CoreModule, TitleComponent, SideMenuComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly _headerService = inject(HeaderService);
  public readonly header = this._headerService.header;
}
