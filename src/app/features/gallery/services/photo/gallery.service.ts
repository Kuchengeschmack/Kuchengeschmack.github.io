import { Injectable } from '@angular/core';
import { Gallery } from '../../models/gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private static readonly _root = 'assets/';
  private static readonly _extension = '.jpg';
  private static readonly _titles = [
    '51degre',
    'agave',
    'Bandoleo',
    'Bellisla',
    'Blonde',
    'bronzage',
    'buick',
    'Cadillac',
    'clairde',
    'Contrejo',
    'crescent',
    'Diane',
    'Ethermer',
    'Femme',
    'Fenetre',
    'fordmust',
    'Frenchri',
    'helios',
    'Heuresch',
    'jaguar',
    'Lamain',
    'Lavoute',
    'Matin',
    'Meditati',
    'meilleur',
    'reminisc',
    'Rolls',
    'Songeuse',
    'themeant',
    'Timine',
    'Visage',
  ];

  private readonly _gallery = new Gallery(
    GalleryService._titles,
    GalleryService._root,
    GalleryService._extension
  );

  public get gallery() {
    return this._gallery;
  }
}
