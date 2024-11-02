import { Injectable } from '@angular/core';
import { Gallery } from '../../models/gallery.model';
import { GalleryConsts } from './gallery.consts';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _gallery = new Gallery(
    GalleryConsts.titles,
    GalleryConsts.root,
    GalleryConsts.extension
  );

  public get photos() {
    return this._gallery.photos;
  }
}
