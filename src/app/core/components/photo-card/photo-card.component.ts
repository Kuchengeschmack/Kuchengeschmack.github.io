import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { SharedModule } from 'app/core/shared/shared.module';
import { Photo } from 'app/features/gallery/models/gallery.model';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './photo-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCardComponent {
  @Input() photo!: Photo;
}
