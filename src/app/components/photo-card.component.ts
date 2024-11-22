import { Component, Input } from '@angular/core';
import { Core } from 'app';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: Core,
  template: `
    <mat-card class="card" appearance="outlined">
      <mat-card-header class="header">
        <mat-card-title>{{ photo.alt }}</mat-card-title>
      </mat-card-header>
      <div class="img">
        <img mat-card-image [src]="photo.src" [alt]="photo.alt" />
      </div>
    </mat-card>
  `,
  styles: `
    @use '@angular/material' as mat;

    .header {
      display: flex;
      justify-content: center;
      margin-bottom: -64px;
      padding-bottom: 16px;
      transition: 1s ease-in-out;
    }

    .img {
      display: grid;
      width: 100%;
      height: 100%;
      overflow: hidden;
      place-items: center;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 1s ease-in-out;
    }

    .card {
      @include mat.elevation(8);
      max-width: 300px;
      height: 100%;

      &:hover,
      &:active {
        .header {
          margin-bottom: 0px;
        }

        img {
          object-fit: cover;
          transform: scale(1.1);
        }
      }
    }
  `,
})
export class PhotoCardComponent {
  @Input() photo = {} as Photo;
}
