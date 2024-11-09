import { Component, Input } from '@angular/core';
import { Core } from 'app/core';
import { CapitalizePipe } from 'app/core/pipes/capitalize/capitalize.pipe';
import { Photo } from 'app/views/gallery/models/gallery.model';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [...Core, CapitalizePipe],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss',
})
export class PhotoCardComponent {
  @Input() photo = {} as Photo;
}
