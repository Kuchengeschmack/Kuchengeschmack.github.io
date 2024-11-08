import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ViewsModule } from './views/views.module';

const appModules = [CoreModule, ViewsModule];

@NgModule({
  imports: appModules,
  exports: appModules,
})
export class AppModule {}
