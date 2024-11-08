import { Component, Input } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { Photo } from 'app/views/gallery/models/gallery.model';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss',
})
export class PhotoCardComponent {
  @Input() photo = {} as Photo;
}
