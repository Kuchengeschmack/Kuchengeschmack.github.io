import { Routes } from '@angular/router';
import { ROUTES } from './core/constants/constants';
import { GalleryComponent } from './views/gallery/components/gallery.component';

export const routes: Routes = [
  {
    path: ROUTES.INTRO.path,
    title: ROUTES.INTRO.title,
    component: GalleryComponent,
  },
  {
    path: ROUTES.BOOK.path,
    title: ROUTES.BOOK.title,
    component: GalleryComponent,
  },
  {
    path: '**',
    redirectTo: ROUTES.BOOK.path,
  },
];
