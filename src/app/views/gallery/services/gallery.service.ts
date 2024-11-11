import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RouterState } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { catchError, map, switchMap, tap } from 'rxjs';

import { Gallery, JsonData } from '../models/gallery.model';

const url = 'http://localhost:8080/images';
const dir = 'assets/images/images.json';

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
      switchMap(path =>
        this._http
          .get<Gallery>(url, {
            params: { url: path || '' },
          })
          .pipe(
            catchError(() =>
              this._http
                .get<JsonData>(dir)
                .pipe(
                  map(
                    (jsonData: JsonData) =>
                      new Gallery(
                        jsonData,
                        'assets/images' + path?.split('gallery')[1] || ''
                      )
                  )
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
