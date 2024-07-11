import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from "../core/components/menu-lateral/menu-lateral.component";
import { CartonPhotoComponent } from '../core/components/carton-photo/carton-photo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuLateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Marie-Cécile Caron, artiste-peintre';
}
