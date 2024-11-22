import type { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Core } from 'app';

import { PhotoCardComponent } from 'components/photo-card.component';
import { GalleryService } from 'services/gallery.service';

@Component({
  selector: 'app-gallery',
  imports: [...Core, PhotoCardComponent],
  standalone: true,
  template: `
    <article class="article">
      <h1>Book</h1>
      <div class="content">
        @for (photo of gallery().photos; track photo.alt) {
          <app-photo-card [photo]="photo"></app-photo-card>
        } @empty {
          <mat-progress-spinner color="primary" mode="indeterminate" value="50">
          </mat-progress-spinner>
        }
      </div>
    </article>
  `,
  styles: `
    @media screen and (min-width: 500px) {
      .content {
        min-width: 1000px;
      }
    }

    .content {
      display: grid;
      width: min(100%, 75rem);
      margin: 0 auto;
      grid-template-columns: repeat(auto-fill, 15rem);
      grid-auto-rows: minmax(20rem, auto);
      grid-auto-flow: row dense;
      justify-content: center;
      place-items: center;
      gap: 3rem;
    }

    .article h1 {
      text-align: center;
    }
  `,
  providers: [HttpClient],
})
export class GalleryComponent implements OnInit {
  private readonly _galleryService = inject(GalleryService);
  readonly gallery = this._galleryService.gallery;
  breakpoint: number = 3;

  ngOnInit () {
    this.breakpoint = window.innerWidth <= 500 ? 1 : 3;
  }

  onResize (event: Event) {
    this.breakpoint
      = (event.target as Window).innerWidth <= 500
      || this.gallery().photos.length === 1
        ? 1
        : 3;
  }
}
