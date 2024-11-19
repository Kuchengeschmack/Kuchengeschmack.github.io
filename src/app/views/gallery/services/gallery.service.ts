import type { JsonData } from '../models/gallery.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, map, tap } from 'rxjs';
import { Gallery } from '../models/gallery.model';

const dir = 'assets/images/images.json';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _router = inject(Router);
  private readonly _http = inject(HttpClient);

  private _gallery = signal({} as Gallery);
  gallery = this._gallery.asReadonly();

  private _getGalleryRemotely () {
    return this._http.get<Gallery>('http://localhost:8080/images', {
      params: {
        path: this._router.url.split('gallery')[1],
      },
    });
  }

  private _getGalleryLocally () {
    return this._http
      .get<JsonData>(dir)
      .pipe(
        map(
          (jsonData: JsonData) =>
            new Gallery(
              jsonData,
              `assets/images${this._router.url?.split('gallery')[1]}` || '',
            ),
        ),
      );
  }

  getGallery () {
    return this._getGalleryLocally().pipe(
      tap((gallery) => {
        this._gallery.set(gallery);
      }),
    );
  }
}
