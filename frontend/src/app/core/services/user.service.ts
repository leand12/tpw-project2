import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import {UserModel} from '@core/models/user.model';
import {serviceURL} from '@core/constants/url';
import {UserProfileModel, UserProfileReadModel} from '@core/models/user-profile.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    const url = serviceURL + 'users/';
    return this.http.get<UserModel[]>(url, httpOptions);
  }

  getUser(id: number): Observable<UserModel> {
    const url = serviceURL + 'user/?id=' + id;
    return this.http.get<UserModel>(url, httpOptions);
  }

  getProfiles(): Observable<UserProfileReadModel[]> {
    const url = serviceURL + 'profiles/';
    return this.http.get<UserProfileReadModel[]>(url, httpOptions);
  }

  getProfile(userid: number): Observable<UserProfileReadModel> {
    const url = serviceURL + 'profile/?userid=' + userid;
    return this.http.get<UserProfileReadModel>(url, httpOptions);
  }

  updateProfile(prof: UserProfileModel, avatar?: File): Observable<any> {
    const payload = new FormData();

    payload.append('data', JSON.stringify(prof));
    if (avatar) {
      payload.append('file', avatar, avatar.name);
    }
    const url = serviceURL + 'update/profile/?userid=' + prof.user;
    return this.http.put(url, payload);
  }
}
