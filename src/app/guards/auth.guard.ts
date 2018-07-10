import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LOGIN_URL, CURRENT_USER_JSON_KEY_STRING } from '../config/constants';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem(CURRENT_USER_JSON_KEY_STRING)) {
            return true;
        }
        this.router.navigate([LOGIN_URL], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
