import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { GalleryComponent } from './views/gallery/gallery.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: 'gallery',
    children: [
      {
        path: 'intro',
        title: 'Marie-Cécile Caron | Présentation',
        canActivate: [authGuard],
        component: GalleryComponent,
      },
      {
        path: 'book',
        title: 'Marie-Cécile Caron | Book',
        canActivate: [authGuard],
        component: GalleryComponent,
      },
      {
        path: 'piano',
        title: 'Marie-Cécile Caron | Cours de piano',
        canActivate: [authGuard],
        component: GalleryComponent,
      },
    ],
  },
  {
    path: 'login',
    title: 'Marie-Cécile Caron | Login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
