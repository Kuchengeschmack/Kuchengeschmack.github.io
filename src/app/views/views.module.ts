import { NgModule } from '@angular/core';
import { BookComponent } from './book/components/book.component';
import { HeaderComponent } from './header/components/header.component';
import { SideMenuComponent } from './side-menu/components/side-menu.component';
import { IntroComponent } from './intro/components/intro.component';

@NgModule({
  imports: [HeaderComponent, SideMenuComponent, BookComponent, IntroComponent],
  exports: [HeaderComponent, SideMenuComponent, BookComponent, IntroComponent],
})
export class ViewsModule {}
