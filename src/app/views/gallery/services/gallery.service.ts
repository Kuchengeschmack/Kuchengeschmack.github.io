import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';

import { Gallery, JsonData } from '../models/gallery.model';

const dir = 'assets/images/images.json';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _router = inject(Router);
  private readonly _http = inject(HttpClient);

  private _gallery = signal({} as Gallery);
  gallery = this._gallery.asReadonly();

  getImages() {
    return this._http.get<JsonData>(dir).pipe(
      map(
        (jsonData: JsonData) =>
          new Gallery(
            jsonData,
            'assets/images' + this._router.url?.split('gallery')[1] || ''
          )
      ),
      tap(gallery => {
        this._gallery.set(gallery);
      })
    );
  }
}
