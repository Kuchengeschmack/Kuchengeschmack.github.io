import { Injectable } from '@angular/core';
import { Gallery, JsonData } from 'app/core/models/gallery.model';
import * as jsonData from 'assets/images.json';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _jsonData: JsonData;

  constructor() {
    this._jsonData = jsonData;
  }

  public getGallery(path: string) {
    return new Gallery(this._jsonData, path);
  }
}
