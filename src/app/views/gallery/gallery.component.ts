import { Component, inject } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'app-gallery',
  imports: [CoreModule, PhotoCardComponent],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  private readonly _galleryService = inject(GalleryService);
  public readonly gallery = this._galleryService.getGallery();
}
