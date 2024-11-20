import type { MenuItem } from 'app/views/header/header.model';

export const MENU_ITEMS: MenuItem[] = [
  { title: 'Présentation', link: 'gallery/intro/' },
  { title: 'Book', link: 'gallery/book/' },
  { title: 'Cours de piano', link: 'gallery/piano/' },
] as const;
