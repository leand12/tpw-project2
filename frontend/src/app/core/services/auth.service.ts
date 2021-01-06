import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import * as moment from 'moment';


@Injectable()
export class AuthService {

  private baseURL = 'http://localhost:8000/auth/';

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

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.baseURL.concat('login/'),
      { username, password }
    ).pipe(
      tap(response => this.setSession(response)),
      shareReplay(),
    );
  }

  signup(username: string, email: string, password1: string, password2: string): Observable<any> {
    return this.http.post(
      this.baseURL.concat('signup/'),
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
        this.baseURL.concat('refresh-token/'),
        { token: this.token }
      ).pipe(
        tap(response => this.setSession(response)),
        shareReplay(),
      ).subscribe();
    }
  }

  getExpiration(): moment.Moment {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }
}

