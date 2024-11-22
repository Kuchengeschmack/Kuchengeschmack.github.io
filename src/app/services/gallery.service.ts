import { Injectable, signal } from '@angular/core';

import photos from 'assets/images/images.json';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private _gallery = signal({ photos });
  gallery = this._gallery.asReadonly();
}
