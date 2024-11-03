import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  imports: [CoreModule, ViewsModule],
  exports: [CoreModule, ViewsModule],
})
export class AppModule {}
