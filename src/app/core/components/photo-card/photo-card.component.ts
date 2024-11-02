import { Component, Input } from '@angular/core';
import { SharedModule } from 'app/core/shared/shared.module';
import { Photo } from 'app/features/gallery/models/gallery.model';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './photo-card.component.html',
})
export class PhotoCardComponent {
  @Input() photo: Photo = new Photo();
}
