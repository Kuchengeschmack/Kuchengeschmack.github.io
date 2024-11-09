import { inject, Injectable } from '@angular/core';
import { RouterState } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { IMAGES } from 'app/core/constants/constants';
import { Gallery } from 'app/views/gallery/models/gallery.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  public readonly gallery$ = inject(Store)
    .select(RouterState.url)
    .pipe(map(url => new Gallery(IMAGES.JSON_DATA, url || '')));
}
