import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES } from 'app/core/constants/constants';
import { Gallery } from 'app/views/gallery/models/gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _router = inject(Router);

  public getGallery() {
    return new Gallery(IMAGES.JSON_DATA, this._router.url);
  }
}
