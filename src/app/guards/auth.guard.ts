import type { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/views/login/login.service';

export const authGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (!loginService.isAuthenticated && router.url !== 'login') {
    router.navigate(['login']);
  }
  return loginService.isAuthenticated;
};
