import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import {authURL} from '@core/constants/consts';

import * as moment from 'moment';
import {UserModel} from '@core/models/user.model';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  private setSession(authResult): void {
    const token = authResult.token;
    console.log(authResult);

    // decode the token to read the username and expiration timestamp
    const tokenParts = token.split(/\./);
    const payload = JSON.parse(window.atob(tokenParts[1]));
    const expiresAt = moment.unix(payload.exp);

    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));

    this.http.get<UserModel>(authURL.concat('user/')).subscribe(
      (user) => localStorage.setItem('user_id', String(user.id))
    );
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      authURL.concat('login/'),
      { username, password }
    ).pipe(
      tap(response => this.setSession(response)),
      shareReplay(),
    );
  }

  signup(username: string, firstName: string, lastName: string, email: string, password1: string, password2: string): Observable<any> {
    return this.http.post(
      authURL.concat('signup/'),
      { username, first_name: firstName, last_name: lastName, email, password1, password2 }
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
        authURL.concat('refresh-token/'),
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


