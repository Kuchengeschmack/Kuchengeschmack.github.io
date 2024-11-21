import { Component, inject, signal } from '@angular/core';
import { Core } from 'app';

import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: Core,
  template: `
    <div class="container">
      <div class="content">
        <mat-form-field>
          <mat-label>E-mail</mat-label>
          <input matInput type="email" [(ngModel)]="email" />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Mot de passe</mat-label>
          <input
            matInput
            [type]="hide() ? 'password' : 'text'"
            [(ngModel)]="password" />
          <button
            mat-icon-button
            matSuffix
            (click)="clickEvent($event)"
            [attr.aria-label]="'Hide password'"
            [attr.aria-pressed]="hide()">
            <mat-icon>{{ hide() ? 'visibility_off' : 'visibility' }}</mat-icon>
          </button>
        </mat-form-field>

        <button mat-raised-button type="submit" (click)="onSubmit()">
          Valider
        </button>
      </div>
    </div>
  `,
  styles: `
    .container {
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: start;
      margin: 10px;
    }

    .content {
      display: grid;
      align-items: center;
      margin: 0px auto;
      mat-form-field {
        + mat-form-field,
        + button {
          margin-top: 0px;
        }
      }
    }
  `,
})
export class LoginComponent {
  private readonly _loginService = inject(LoginService);
  email = '';
  password = '';
  readonly hide = signal(true);

  clickEvent (event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit () {
    this._loginService.login(this.email, this.password);
  }
}
