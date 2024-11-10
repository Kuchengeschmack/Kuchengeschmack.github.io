import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { SetAuthData } from './auth.actions';

const ID = 'dorian';
const PASSWORD = '1234';

export interface AuthenticationPayload {
  id: string;
  password: string;
}

export interface AuthenticationStateModel extends AuthenticationPayload {
  isAuthenticated: boolean;
}

@State<AuthenticationStateModel>({
  name: 'authState',
  defaults: {
    id: '',
    password: '',
    isAuthenticated: false,
  },
})
@Injectable({ providedIn: 'root' })
export class AuthState {
  @Selector()
  static getAuthData(
    state: AuthenticationStateModel
  ): AuthenticationStateModel {
    return AuthState.getInstanceState(state);
  }

  private static setInstanceState(
    state: AuthenticationPayload
  ): AuthenticationStateModel {
    return {
      ...state,
      isAuthenticated: state.id === ID && state.password === PASSWORD,
    };
  }

  private static getInstanceState(
    state: AuthenticationStateModel
  ): AuthenticationStateModel {
    return { ...state };
  }

  @Action(SetAuthData)
  setAuthData(
    { setState }: StateContext<AuthenticationStateModel>,
    { payload }: SetAuthData
  ) {
    setState(AuthState.setInstanceState(payload));
  }
}
