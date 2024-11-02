import { inject, Injectable } from '@angular/core';
import { GalleryService } from 'app/core/services/gallery.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly _galleryService = inject(GalleryService);
  private readonly _book = this._galleryService.getGallery('book/');

  public get book() {
    return this._book;
  }
}
