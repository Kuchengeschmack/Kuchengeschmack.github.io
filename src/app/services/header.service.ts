import type { MenuItem } from 'models/header.model';

import { Injectable } from '@angular/core';
import { Header } from 'models/header.model';

const MENU_ITEMS: MenuItem[] = [
  { title: 'Présentation', link: 'gallery/intro/' },
  { title: 'Book', link: 'gallery/book/' },
  { title: 'Cours de piano', link: 'gallery/piano/' },
] as const;

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  readonly header = new Header(
    MENU_ITEMS,
    'Marie-Cécile Caron, artiste-peintre',
  );
}
