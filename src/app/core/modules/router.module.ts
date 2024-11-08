import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

const routerModules = [RouterLink, RouterOutlet];

@NgModule({
  imports: routerModules,
  exports: routerModules,
})
export class RouterModule {}
