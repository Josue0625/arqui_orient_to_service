import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem("access_token");
  if(!token){
    router.navigate(["home"]);
    return false;
  }

  return true;
};