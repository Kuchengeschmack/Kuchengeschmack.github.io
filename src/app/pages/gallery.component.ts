import type { OnDestroy, OnInit } from '@angular/core';
import type { Subscription } from 'rxjs';
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
    <div class="content">
      @if (gallery()) {
        @for (photo of gallery().photos; track photo.alt) {
          <app-photo-card [photo]="photo"></app-photo-card>
        } @empty {
          Les photos n'ont pas pu être récupérées.
        }
      } @else {
        <mat-progress-spinner
          class="center"
          color="primary"
          mode="indeterminate"
          value="50">
        </mat-progress-spinner>
      }
    </div>
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

    .center {
      margin: 0 auto;
    }
  `,
  providers: [HttpClient],
})
export class GalleryComponent implements OnInit, OnDestroy {
  private readonly _galleryService = inject(GalleryService);
  private _subscription: Subscription = this._galleryService
    .getGallery()
    .subscribe();

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

  ngOnDestroy () {
    this._subscription.unsubscribe();
  }
}
