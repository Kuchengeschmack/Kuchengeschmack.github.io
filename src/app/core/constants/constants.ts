import { MenuItem } from 'app/views/header/models/header.model';
import * as jsonData from 'assets/images/images.json';

export const IMAGES = {
  ROOT: 'assets/images',
  EXTENSION: '.jpg',
  JSON_DATA: jsonData,
} as const;

export const MENU_ITEMS: MenuItem[] = [
  { title: 'Présentation', link: 'gallery/intro/'},
  { title: 'Book', link: 'gallery/book/' },
  { title: 'Cours de piano', link: 'piano/' },
  { title: 'Facebook', link: 'facebook' },
] as const;
