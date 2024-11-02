import { Routes } from '@angular/router';
import { BookComponent } from './features/book/components/book.component';
import { IntroComponent } from './features/intro/components/intro.component';

export const routes: Routes = [
  {
    path: 'intro',
    title: 'Marie-Cécile Caron | Présentation',
    component: IntroComponent,
  },
  {
    path: 'book',
    title: 'Marie-Cécile Caron | Book',
    component: BookComponent,
  },
  {
    path: '**',
    redirectTo: 'book'
  }
];
