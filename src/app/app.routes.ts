import type { Routes } from '@angular/router';

import { GalleryComponent } from 'pages/gallery.component';
import { IntroComponent } from 'pages/intro.component';
import { PianoComponent } from 'pages/piano.component';

export const routes: Routes = [
  {
    path: 'gallery',
    children: [
      {
        path: 'book',
        title: 'Marie-Cécile Caron | Book',
        component: GalleryComponent,
      },
    ],
  },
  {
    path: 'intro',
    title: 'Marie-Cécile Caron | Présentation',
    component: IntroComponent,
  },
  {
    path: 'piano',
    title: 'Marie-Cécile Caron | Cours de piano',
    component: PianoComponent,
  },
  {
    path: '**',
    redirectTo: 'gallery/book',
  },
];
