import { Component, Input } from '@angular/core';

import { Core } from 'core/index';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  template: `
    <div class="right-side">
      <div class="pill-group">
        @for (item of sideMenu; track item.title) {
          <a class="pill" [routerLink]="item.link" rel="noopener">
            <span>{{ item.title }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              viewBox="0 -960 960 960"
              width="14"
              fill="currentColor">
              <path
                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
            </svg>
          </a>
        }
        <a class="pill" [href]="facebookUrl" target="_blank" rel="noopener">
          <span>Facebook</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            viewBox="0 -960 960 960"
            width="14"
            fill="currentColor">
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        </a>
      </div>
      <div class="social-links">
        <a
          href="https://github.com/Kuchengeschmack/artiste-peintre"
          aria-label="Github"
          target="_blank"
          rel="noopener">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Github">
            <path
              d="M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z" />
          </svg>
        </a>
      </div>
    </div>
  `,
  styles: `
    @media screen and (max-width: 500px) {
      .pill-group {
        flex-direction: row;
        justify-content: center;
      }

      .social-links {
        justify-content: center;
      }
    }

    @media screen and (min-width: 500px) {
      .pill-group {
        flex-direction: row;
      }
    }

    .pill {
      display: flex;
      align-items: center;
      --pill-accent: var(--bright-blue);
      background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
      color: var(--pill-accent);
      padding-inline: 0.75rem;
      padding-block: 0.375rem;
      border-radius: 2.75rem;
      border: 0;
      transition: background 0.3s ease;
      font-family: var(--inter-font);
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.4rem;
      letter-spacing: -0.00875rem;
      text-decoration: none;

      &:hover {
        background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
      }
    }

    .pill-group {
      display: flex;
      align-items: start;
      flex-wrap: wrap;
      gap: 1.25rem;

      .pill:nth-child(6n + 1) {
        --pill-accent: var(--bright-blue);
      }

      .pill:nth-child(6n + 2) {
        --pill-accent: var(--french-violet);
      }
      .pill:nth-child(6n + 3),
      .pill:nth-child(6n + 4),
      .pill:nth-child(6n + 5) {
        --pill-accent: var(--hot-red);
      }

      svg {
        margin-inline-start: 0.25rem;
      }
    }

    .social-links {
      display: flex;
      align-items: center;
      gap: 0.73rem;
      margin-top: 1.5rem;

      path {
        transition: fill 0.3s ease;
        fill: var(--gray-400);
      }

      a:hover svg path {
        fill: var(--gray-900);
      }
    }
  `,
  imports: Core,
})
export class SideMenuComponent {
  @Input() sideMenu = [] as Header['menuItems'];
  readonly facebookUrl = 'https://www.facebook.com/mariececile.caron';
}
