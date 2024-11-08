import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { PipeModule } from './pipes/pipe.module';
import { RouterModule } from './modules/router.module';

const coreModules = [MaterialModule, PipeModule, RouterModule];

@NgModule({
  imports: coreModules,
  exports: coreModules,
})
export class CoreModule {}
