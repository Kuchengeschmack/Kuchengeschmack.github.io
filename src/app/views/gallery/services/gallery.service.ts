import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES } from 'app/core/constants/constants';
import { Gallery } from 'app/views/gallery/models/gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _router = inject(Router);
  private readonly _jsonData = IMAGES.JSON_DATA;
  private readonly _url = () => this._router.url.split('gallery')[1];

  public getGallery() {
    return new Gallery(this._jsonData, this._url());
  }
}
