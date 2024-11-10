import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetAuthData } from 'app/store/auth/auth.actions';
import { AuthState } from 'app/store/auth/auth.state';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly _store = inject(Store);
  public readonly isAuthenticated$ = this._store
    .select(AuthState.getAuthData)
    .pipe(map(state => state.isAuthenticated));

  public login(id: string, password: string) {
    this._store.dispatch(
      new SetAuthData({
        id,
        password,
      })
    );
  }
}
