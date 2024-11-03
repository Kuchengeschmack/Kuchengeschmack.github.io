import { Injectable } from '@angular/core';
import { Gallery } from 'app/core/models/gallery.model';
import { IMAGES } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _jsonData = IMAGES.JSON_DATA;

  public getGallery(path: string) {
    return new Gallery(this._jsonData, path);
  }
}
