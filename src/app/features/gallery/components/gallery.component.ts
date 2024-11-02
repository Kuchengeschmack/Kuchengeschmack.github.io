import { Component, inject } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { GalleryService } from '../services/gallery.service';
import { PhotoCardComponent } from 'app/core/components/photo-card/photo-card.component';

@Component({
  selector: 'app-gallery',
  imports: [CoreModule],
  standalone: true,
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  private readonly _galleryService = inject(GalleryService);
  public readonly gallery = this._galleryService.gallery;
}
