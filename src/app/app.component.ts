import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureModule } from './feature/feature.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeatureModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Marie-Cécile Caron, artiste-peintre';
}
