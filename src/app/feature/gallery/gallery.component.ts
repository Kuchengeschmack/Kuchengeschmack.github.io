import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
    photos = [{title: "src/assets/51degre.jpg"}];
}
