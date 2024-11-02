import { Injectable } from '@angular/core';
import { Photo } from '../../models/photo.model';
import { Photos } from './photos.consts';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private readonly _paths = Photos.titles.map(
    (t) => Photos.root + t + Photos.extension
  );
  private readonly _photos = this._paths.map((path) => new Photo(path));

  public get photos() {
    return this._photos;
  }
}
