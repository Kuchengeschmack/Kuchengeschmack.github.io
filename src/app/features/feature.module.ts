import { NgModule } from '@angular/core';
import { BookComponent } from './book/components/book.component';
import { HeaderComponent } from './header/components/header.component';
import { SideMenuComponent } from './side-menu/components/side-menu.component';

@NgModule({
  imports: [HeaderComponent, SideMenuComponent, BookComponent],
  exports: [HeaderComponent, SideMenuComponent, BookComponent],
})
export class FeatureModule {}
