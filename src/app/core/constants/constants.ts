import { MenuItem } from 'app/views/header/models/header.model';
import * as jsonData from 'assets/images/images.json';

export const ROUTES = {
  INTRO: {
    path: 'intro',
    title: 'Marie-Cécile Caron | Présentation',
  },
  BOOK: {
    path: 'book',
    title: 'Marie-Cécile Caron | Book',
  },
  PIANO: {
    path: 'piano',
    title: 'Marie-Cécile Caron | Cours de piano',
  },
} as const;

export const IMAGES = {
  ROOT: 'assets/images',
  EXTENSION: '.jpg',
  JSON_DATA: jsonData,
} as const;

export const MENU_ITEMS: MenuItem[] = [
  { title: 'Présentation', link: ROUTES.INTRO.path },
  { title: 'Book', link: ROUTES.BOOK.path },
  { title: 'Cours de piano', link: ROUTES.PIANO.path },
  { title: 'Facebook', link: 'facebook' },
] as const;
