import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { PipeModule } from './pipes/pipe.module';

const coreModules = [MaterialModule, PipeModule];

@NgModule({
  imports: coreModules,
  exports: coreModules,
})
export class CoreModule {}
