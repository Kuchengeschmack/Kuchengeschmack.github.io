import * as jsonData from 'app/core/constants/images.json';

export const IMAGES = {
  ROOT: 'assets/images/',
  EXTENSION: '.jpg',
  PATHS: {
    BOOK: 'book/',
    INTRO: 'intro/',
    PIANO: 'piano/',
  },
  JSON_DATA : jsonData
} as const;

export const SIDE_MENU = [
  { title: 'Présentation', link: 'intro' },
  { title: 'Book', link: 'gallery' },
  { title: 'Cours de piano', link: 'piano' },
  { title: 'Facebook', link: 'facebook' },
] as const;