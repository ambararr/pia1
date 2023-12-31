
/*import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router'; // Asegúrate de que esta línea esté importada correctamente
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { take, map, tap } from 'rxjs/operators'; // Puedes usar 'rxjs/operators' para operadores RxJS

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.user$
      .pipe(
        take(1),
        map(user => user ? true : false),
        tap(isLoggedIn => {
          if (!isLoggedIn) {
            return this.router.createUrlTree(['/login']);
            //this.router.navigate(['/login']);
            //return false;
          }
          return true;
        })
      );
  }
}*/ 
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { take, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return   this.auth.user$//this.auth.user$
      .pipe(
        take(1),
        map(user => !!user), // Simplified map
        map(isLoggedIn => {
          if (!isLoggedIn) {
            // Use the createUrlTree to navigate
            return this.router.createUrlTree(['/login']);
          }
          return true;
        })
      );
  }
}