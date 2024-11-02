import { Component, inject } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { GalleryService } from '../services/photo/gallery.service';

@Component({
  selector: 'app-gallery',
  imports: [CoreModule],
  standalone: true,
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  private readonly _photoService = inject(GalleryService);
  public readonly photos = this._photoService.photos;
}
