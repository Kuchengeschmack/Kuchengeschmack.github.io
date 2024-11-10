import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RouterState } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { IMAGES } from 'app/core/constants/constants';
import { catchError, map, switchMap, tap } from 'rxjs';

import { Gallery, JsonData } from '../models/gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _http = inject(HttpClient);
  private readonly _store = inject(Store);

  private _gallery = signal({} as Gallery);
  gallery = this._gallery.asReadonly();

  getImages() {
    return this._store.select(RouterState.url).pipe(
      switchMap(url =>
        this._http
          .get<Gallery>('http://localhost:8080/images', {
            params: { url: url || '' },
          })
          .pipe(
            catchError(() =>
              this._http
                .get<JsonData>(IMAGES.ROOT + '/images.json')
                .pipe(
                  map((jsonData: JsonData) => new Gallery(jsonData, url || ''))
                )
            ),
            tap(gallery => {
              this._gallery.set(gallery);
            })
          )
      )
    );
  }
}
