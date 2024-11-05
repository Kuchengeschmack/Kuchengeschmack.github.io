import { Component, Input } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { PhotoGallery } from '../models/gallery.model';

@Component({
  selector: 'app-photo-gallery',
  imports: [CoreModule],
  standalone: true,
  templateUrl: './photo-gallery.component.html',
})
export class PhotoGalleryComponent {
  @Input() photoGallery!: PhotoGallery;
}
