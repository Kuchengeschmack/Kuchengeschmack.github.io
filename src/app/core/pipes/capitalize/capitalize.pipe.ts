import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform (value: string): string {
    if (value?.length > 0) {
      return value[0].toUpperCase() + value.slice(1);
    }
    return '';
  }
}
