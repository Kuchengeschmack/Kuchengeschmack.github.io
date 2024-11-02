import { Injectable } from '@angular/core';
import * as jsonData from 'assets/book.json';
import { Gallery } from '../models/gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _jsonData = jsonData;
  private readonly _gallery = new Gallery(this._jsonData);

  public get gallery() {
    return this._gallery;
  }
}
