import { Injectable } from '@angular/core';

const ID = 'dorian@example.com';
const PASSWORD = '1234';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _isAuthenticated = false;

  login(id: string, password: string) {
    this._isAuthenticated = id === ID && password === PASSWORD;
  }

  canActivate() {
    return this._isAuthenticated;
  }
}
