import { Component, inject } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { IntroService } from '../services/intro.service';

@Component({
  selector: 'app-intro',
  imports: [CoreModule],
  standalone: true,
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  private readonly _introService = inject(IntroService);
  public readonly intro = this._introService.intro;
}
