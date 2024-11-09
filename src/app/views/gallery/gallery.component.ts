import { Component, inject } from '@angular/core';
import { Core } from 'app/core';

import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'app-gallery',
  imports: [...Core, PhotoCardComponent],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  public readonly gallery$ = inject(GalleryService).gallery$;
}
