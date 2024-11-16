import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from 'app/views/login/services/login.service';

export const authGuard: CanActivateFn = () => {
  return inject(LoginService).canActivate();
};
