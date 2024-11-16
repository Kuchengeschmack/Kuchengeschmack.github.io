import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'app/views/login/services/login.service';

export const authGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (!loginService.isAuthenticated && router.url !== 'login') {
    router.navigate(['login']);
  }
  return loginService.isAuthenticated;
};
