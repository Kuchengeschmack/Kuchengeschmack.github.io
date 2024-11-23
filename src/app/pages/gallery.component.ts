import type { OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

import photos from 'assets/images.json';
import { PhotoCardComponent } from 'components/photo-card.component';
import { CoreModule } from 'core/core.module';

@Component({
  selector: 'app-gallery',
  imports: [CoreModule, PhotoCardComponent],
  standalone: true,
  template: `
    <article class="article">
      <h1>Book</h1>
      <div class="content">
        @for (photo of gallery.photos; track photo.alt) {
          <app-photo-card [photo]="photo"></app-photo-card>
        } @empty {
          <mat-progress-spinner color="primary" mode="indeterminate" value="50">
          </mat-progress-spinner>
        }
      </div>
    </article>
  `,
  styles: `
    .content {
      display: grid;
      width: min(100%, 100rem);
      margin: 0 auto;
      grid-template-columns: repeat(auto-fill, 20rem);
      grid-auto-rows: minmax(20rem, auto);
      grid-auto-flow: row dense;
      justify-content: center;
      place-items: center;
      gap: 3rem;
    }

    .article {
      padding: 3rem;
      h1 {
        text-align: center;
        font-weight: 700;
      }
    }
  `,
})
export class GalleryComponent implements OnInit {
  readonly gallery = { photos };
  breakpoint: number = 3;

  constructor (@Inject(DOCUMENT) private _document: Document) {}

  ngOnInit () {
    if (this._document.defaultView) {
      this.breakpoint = this._document.defaultView.innerWidth <= 500 ? 1 : 3;
    }
  }

  onResize (event: Event) {
    this.breakpoint
      = (event.target as Window).innerWidth <= 500 || this.gallery.photos.length === 1 ? 1 : 3;
  }
}
