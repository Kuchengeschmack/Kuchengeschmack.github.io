import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  imports: [MatCardModule, MatGridListModule, RouterLink, RouterOutlet],
  exports: [MatCardModule, MatGridListModule, RouterLink, RouterOutlet],
})
export class SharedModule {}
