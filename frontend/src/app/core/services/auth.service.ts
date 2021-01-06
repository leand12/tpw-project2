import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import * as moment from 'moment';

interface JWTPayload {
  user_id: number;
  username: string;
  email: string;
  exp: number;
}

@Injectable()
export class AuthService {

  private apiRoot = 'http://localhost:8000/auth/';

  constructor(private http: HttpClient) { }

  private setSession(authResult): void {
    const token = authResult.token;

    console.log(token);
    // decode the token to read the username and expiration timestamp
    const tokenParts = token.split(/\./);
    const payload = JSON.parse(window.atob(tokenParts[1]));
    const expiresAt = moment.unix(payload.exp);

    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  // tslint:disable-next-line:typedef
  login(username: string, password: string) {
    return this.http.post(
      this.apiRoot.concat('login/'),
      { username, password }
    ).pipe(
      tap(response => this.setSession(response)),
      shareReplay(),
    );
  }

  // tslint:disable-next-line:typedef
  signup(username: string, email: string, password1: string, password2: string) {
    return this.http.post(
      this.apiRoot.concat('signup/'),
      { username, email, password1, password2 }
    ).pipe(
      tap(response => this.setSession(response)),
      shareReplay(),
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  // tslint:disable-next-line:typedef
  refreshToken() {
    if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
      return this.http.post(
        this.apiRoot.concat('refresh-token/'),
        { token: this.token }
      ).pipe(
        tap(response => this.setSession(response)),
        shareReplay(),
      ).subscribe();
    }
  }

  // tslint:disable-next-line:typedef
  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }
}


