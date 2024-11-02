import { NgModule } from '@angular/core';
import { ComponentModule } from './components/component.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [ComponentModule, SharedModule],
  exports: [ComponentModule, SharedModule],
})
export class CoreModule {}
