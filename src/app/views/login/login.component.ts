import { Component, inject, signal } from '@angular/core';
import { Core } from 'app/core';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: Core,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly _loginService = inject(LoginService);
  public id = '';
  public password = '';
  public readonly isAuthenticated$ = this._loginService.isAuthenticated$;
  readonly hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit() {
    this._loginService.login(this.id, this.password);
  }
}
