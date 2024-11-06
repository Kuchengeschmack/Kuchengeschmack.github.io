import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input() title = '';
}
