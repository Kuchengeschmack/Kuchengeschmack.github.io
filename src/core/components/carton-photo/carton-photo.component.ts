import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-carton-photo',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './carton-photo.component.html',
  styleUrl: './carton-photo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartonPhotoComponent {

}
