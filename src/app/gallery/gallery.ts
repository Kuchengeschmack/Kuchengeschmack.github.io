import type { OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

import photos from 'assets/images.json';
import { CoreModule } from 'core/core-module';
import { PhotoCard } from './photo-card';

@Component({
  selector: 'art-gallery',
  imports: [CoreModule, PhotoCard],
  template: `
    <article class="article">
      <h1>Book</h1>
      <div class="content">
        @for (photo of gallery.photos; track photo.alt) {
          <art-photo-card [photo]="photo"></art-photo-card>
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
export class Gallery implements OnInit {
  protected readonly gallery = { photos };
  protected breakpoint: number = 3;

  constructor (@Inject(DOCUMENT) private _document: Document) {}

  ngOnInit () {
    this._size();
  }

  private _size () {
    if (this._document.defaultView) {
      this.breakpoint = this._document.defaultView.innerWidth <= 500 ? 1 : 3;
    }
  }
}
