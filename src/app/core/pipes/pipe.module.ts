import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize/capitalize.pipe';

const pipes = [CapitalizePipe];

@NgModule({
  imports: pipes,
  exports: pipes,
})
export class PipeModule {}
