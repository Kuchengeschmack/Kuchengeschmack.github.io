import { inject, Injectable } from '@angular/core';
import { IMAGES } from 'app/core/constants/constants';
import { GalleryService } from 'app/core/services/gallery.service';

@Injectable({
  providedIn: 'root',
})
export class IntroService {
  private readonly _galleryService = inject(GalleryService);
  private readonly _intro = this._galleryService.getGallery(IMAGES.PATHS.INTRO);

  public get intro() {
    return this._intro;
  }
}
