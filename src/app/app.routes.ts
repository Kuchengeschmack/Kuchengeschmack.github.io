import type { Routes } from '@angular/router';

import { GalleryComponent } from 'pages/gallery.component';
import { IntroComponent } from 'pages/intro.component';
import { LoginComponent } from 'pages/login.component';
import { PianoComponent } from 'pages/piano.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'gallery',
    children: [
      {
        path: 'book',
        title: 'Marie-Cécile Caron | Book',
        canActivate: [authGuard],
        component: GalleryComponent,
      },
    ],
  },
  {
    path: 'intro',
    title: 'Marie-Cécile Caron | Présentation',
    canActivate: [authGuard],
    component: IntroComponent,
  },
  {
    path: 'login',
    title: 'Marie-Cécile Caron | Login',
    component: LoginComponent,
  },
  {
    path: 'piano',
    title: 'Marie-Cécile Caron | Cours de piano',
    canActivate: [authGuard],
    component: PianoComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
