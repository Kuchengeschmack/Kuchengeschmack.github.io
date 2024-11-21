import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

const ID = 'dorian';
const PASSWORD = '1234';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly _router = inject(Router);
  private readonly _snackBar = inject(MatSnackBar);
  private _isAuthenticated = false;

  login (id: string, password: string) {
    this._isAuthenticated = id === ID && password === PASSWORD;
    if (this._isAuthenticated) {
      this._snackBar.open('Vous êtes connecté.', undefined, { duration: 3000 });
      this._router.navigate(['gallery/book']);
    }
    else {
      this._snackBar.open('E-mail ou mot de passe erroné.', undefined, {
        duration: 3000,
      });
    }
  }

  get isAuthenticated () {
    return this._isAuthenticated;
  }
}
