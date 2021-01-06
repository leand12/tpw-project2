import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      this.authService.refreshToken();
      this.router.navigate(['home']);
      return false;
    } else {
      this.authService.logout();
      return true;
    }
  }
}
