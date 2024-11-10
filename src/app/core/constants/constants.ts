import { MenuItem } from 'app/views/header/models/header.model';

export const IMAGES = {
  ROOT: 'assets/images',
  EXTENSION: '.jpg',
} as const;

export const MENU_ITEMS: MenuItem[] = [
  { title: 'Présentation', link: 'gallery/intro/' },
  { title: 'Book', link: 'gallery/book/' },
  { title: 'Cours de piano', link: 'piano/' },
  { title: 'Facebook', link: 'facebook' },
] as const;
