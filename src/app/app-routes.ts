import type { Routes } from '@angular/router';

import { Gallery } from 'app/gallery/gallery';
import { Piano } from 'app/piano/piano';

export const routes: Routes = [
  {
    path: 'book',
    title: 'Marie-Cécile Caron | Book',
    component: Gallery,
  },
  {
    path: 'piano',
    title: 'Marie-Cécile Caron | Cours de piano',
    component: Piano,
  },
  {
    path: '**',
    redirectTo: 'book',
  },
];
