import { Routes } from '@angular/router';
import { IMAGES } from './core/constants/constants';
import { GalleryComponent } from './views/gallery/components/gallery.component';

export const routes: Routes = [
  {
    path: IMAGES.PATHS.INTRO,
    title: 'Marie-Cécile Caron | Présentation',
    component: GalleryComponent,
  },
  {
    path: IMAGES.PATHS.BOOK,
    title: 'Marie-Cécile Caron | Book',
    component: GalleryComponent,
  },
  {
    path: '**',
    redirectTo: IMAGES.PATHS.BOOK,
  },
];
