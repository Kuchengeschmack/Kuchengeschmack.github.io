import { Component, Input } from '@angular/core';
import { CoreModule } from 'core/core-module';

@Component({
  selector: 'art-photo-card',
  imports: [CoreModule],
  template: `
    <div class="photo-card">
      <div class="photo-card-header">
        <h1>{{ photo.alt }}</h1>
      </div>
      <div class="photo-card-img">
        <img mat-card-image [src]="photo.src" [alt]="photo.alt" />
      </div>
    </div>
  `,
  styles: `
    @use '@angular/material' as mat;

    .photo-card-header {
      display: flex;
      justify-content: center;
      height: 32px;
      padding: 16px;
      margin-bottom: -64px;
      transition: 1s ease-in-out;

      h1 {
        margin: 0px;
        font-weight: 500;
      }
    }

    .photo-card-img {
      display: grid;
      width: 100%;
      height: 100%;
      overflow: hidden;
      place-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .photo-card {
      @include mat.elevation(8);
      max-width: 300px;
      height: 100%;
      overflow: hidden;
      border-radius: 10px;
      transition: 1s ease-in-out;

      &:hover,
      &:active {
        transform: scale(1.1);
        .photo-card-header {
          margin-bottom: 0px;
        }
      }
    }
  `,
})
export class PhotoCard {
  @Input() photo = {} as Photo;
}
