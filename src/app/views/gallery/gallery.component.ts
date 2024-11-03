import { Component, inject } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { PhotoGalleryComponent } from './components/photo-gallery.component';
import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'app-gallery',
  imports: [CoreModule, PhotoGalleryComponent],
  standalone: true,
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  private readonly _galleryService = inject(GalleryService);
  public readonly gallery = this._galleryService.getGallery();
}
