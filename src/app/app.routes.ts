import { Routes } from '@angular/router';
import { GalleryComponent } from './features/gallery/components/gallery.component';
import { IntroComponent } from './features/intro/components/intro.component';

export const routes: Routes = [
  {
    path: 'intro',
    title: 'Marie-Cécile Caron | Présentation',
    component: IntroComponent,
  },
  {
    path: 'gallery',
    title: 'Marie-Cécile Caron | Book',
    component: GalleryComponent,
  },
  {
    path: '**',
    redirectTo: 'gallery'
  }
];
