import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { AuthState } from '../models/auth.model'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<{ auth: AuthState }>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select((state) => state.auth.isAuthenticated).pipe(
      take(1), // Take only the latest value and complete the observable
      map((isAuthenticated) => {
        debugger
        if (isAuthenticated) {
          return true; // Allow access to the route
        } else {
          this.router.navigate(['/login']); // Redirect to login page
          return false; // Deny access to the route
        }
      })
    );
  }
}