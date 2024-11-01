import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './photo-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoCardComponent {

}
