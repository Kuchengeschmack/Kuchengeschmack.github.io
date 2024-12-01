import { Component } from '@angular/core';
import { environment } from 'environments/environment';
import { version } from '../../../package.json';

@Component({
  selector: 'art-footer',
  template: `
    <div class="container">
      <div class="version" [hidden]="hidden">v{{ version }}</div>
      <address class="address">mc-caron.com</address>
      <div class="social-links">
        <a
          href="https://www.facebook.com/mariececile.caron"
          aria-label="Facebook"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Facebook"
          >
            <path
              d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
            />
          </svg>
        </a>
      </div>
    </div>
  `,
  styles: `
    .container {
      display: grid;
      width: 100%;
      height: 40px;
      background-color: white;
      text-align: center;
      align-items: center;
      justify-items: center;
    }

    .address,
    a {
      width: fit-content;
      align-content: center;
    }

    .social-links {
      display: flex;
      align-content: center;
      width: fit-content;
      height: 40px;
      position: fixed;
      right: 10px;
      bottom: 0px;
      z-index: 1;
      gap: 5px;

      path {
        transition: fill 0.3s ease;
        fill: var(--gray-400);
      }

      a:hover svg path {
        fill: var(--gray-900);
      }
    }

    .version {
      align-content: center;
      width: fit-content;
      height: 40px;
      position: fixed;
      left: 10px;
      bottom: 0px;
      z-index: 1;
    }
  `,
})
export class Footer {
  protected hidden = environment.production;
  protected version = version;
}
