import type { JsonData } from 'models/gallery.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'environments/environment';
import { Gallery } from 'models/gallery.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _router = inject(Router);
  private readonly _http = inject(HttpClient);

  private _gallery = signal({} as Gallery);
  gallery = this._gallery.asReadonly();

  public getGallery () {
    return this._http.get<JsonData>(environment.backendUrl).pipe(
      map(
        (jsonData: JsonData) =>
          new Gallery(
            jsonData,
            `assets/images${this._router.url?.split('gallery')[1]}` || '',
          ),
      ),
      tap((gallery) => {
        this._gallery.set(gallery);
      }),
    );
  }
}
