import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  imports: [
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    RouterLink,
    RouterOutlet,
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    RouterLink,
    RouterOutlet,
  ],
})
export class SharedModule {}
