import { NgModule } from '@angular/core';

import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [HeaderComponent, GalleryComponent],
  exports: [HeaderComponent, GalleryComponent],
})
export class ViewsModule {}
