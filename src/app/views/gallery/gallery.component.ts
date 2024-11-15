import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Core } from 'app/core';
import { Subscription } from 'rxjs';

import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'app-gallery',
  imports: [...Core, PhotoCardComponent],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  providers: [HttpClient],
})
export class GalleryComponent implements OnInit, OnDestroy {
  private readonly _galleryService = inject(GalleryService);
  private _subscriptions = [] as Subscription[];
  readonly gallery = this._galleryService.gallery;
  breakpoint: number = 3;

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 500 ? 1 : 3;
    this._subscriptions.push(this._galleryService.getImages().subscribe());
  }

  onResize(event: Event) {
    this.breakpoint =
      (event.target as Window).innerWidth <= 500 ||
      this.gallery().photos.length === 1
        ? 1
        : 3;
  }

  ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }
}
