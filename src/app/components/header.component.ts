import { Component } from '@angular/core';
import header from 'assets/header.json';

import { CoreModule } from 'core/core.module';

@Component({
  selector: 'app-header',
  imports: [CoreModule],
  template: `
    <div class="content">
      <div class="left-side">
        <h1>Marie-Cécile Caron, artiste-peintre</h1>
      </div>
      <div class="divider" role="separator" aria-label="Divider"></div>
      <div class="right-side">
        <nav class="pill-group">
          @for (item of header; track item.title) {
            <a class="pill" [routerLink]="item.link" rel="noopener">
              <span>{{ item.title }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                viewBox="0 -960 960 960"
                width="14"
                fill="currentColor"
              >
                <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
                />
              </svg>
            </a>
          }
        </nav>
      </div>
    </div>
  `,
  styles: `
    .content {
      width: 100%;
      display: grid;
      justify-content: start;
    }

    .divider {
      height: 1px;
      writing-mode: vertical-lr;
      margin-inline: 1rem;
      background: var(--red-to-pink-to-purple-vertical-gradient);
    }

    .left-side {
      text-align: center;
      margin: 1rem 0 1rem;
      h1 {
        font-size: 1.5rem;
        color: var(--gray-900);
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.125rem;
        margin-bottom: 0px;
      }

      p {
        margin: 1.5rem 0 0;
        color: var(--gray-700);
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0 1rem;
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
      align-items: center;
      flex-wrap: wrap;
      gap: 1.25rem;

      .pill {
        &:nth-child(6n + 1) {
          --pill-accent: var(--bright-blue);
        }

        &:nth-child(6n + 2) {
          --pill-accent: var(--french-violet);
        }

        &:nth-child(6n + 3),
        &:nth-child(6n + 4),
        &:nth-child(6n + 5) {
          --pill-accent: var(--hot-red);
        }
      }

      svg {
        margin-inline-start: 0.25rem;
      }
    }

    @media screen and (min-width: 500px) {
      .content {
        grid-template-columns: 1fr 81px 1fr;
      }

      .divider {
        height: 100%;
        width: 1px;
        justify-self: center;
        margin-inline: 2.5rem;
        writing-mode: horizontal-tb;
      }

      .left-side {
        justify-self: end;
        h1 {
          text-align: right;
          font-size: 2.125rem;
        }
      }

      .right-side {
        justify-self: start;

        .pill-group {
          flex-direction: row;
          justify-content: start;
        }
      }
    }
  `,
})
export class HeaderComponent {
  readonly header = header;
}
