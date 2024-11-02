import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery/components/gallery.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  imports: [HeaderComponent, SideMenuComponent, GalleryComponent],
  exports: [HeaderComponent, SideMenuComponent, GalleryComponent],
})
export class FeatureModule {}
