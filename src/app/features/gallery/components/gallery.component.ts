import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PhotoService } from '../services/photo/photo.service';

@Component({
  selector: 'app-gallery',
  imports: [MatCardModule, MatGridListModule],
  standalone: true,
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  private _photoService = inject(PhotoService);
  photos = this._photoService.photos;
}
