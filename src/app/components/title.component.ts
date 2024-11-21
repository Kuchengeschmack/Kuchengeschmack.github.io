import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  template: `
    <div class="left-side">
      <h1>{{ title }}</h1>
    </div>
  `,
  styles: `
    h1 {
      font-size: 2.125rem;
      color: var(--gray-900);
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -0.125rem;
      margin: 1.75rem 0 0;
      font-family:
        'Inter Tight',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Helvetica,
        Arial,
        sans-serif,
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol';
    }

    p {
      margin: 1.5rem 0 0;
      color: var(--gray-700);
    }
  `,
})
export class TitleComponent {
  @Input() title = '';
}
