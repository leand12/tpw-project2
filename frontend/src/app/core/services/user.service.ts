import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import {UserModel} from '@core/models/user.model';
import {baseURL} from '@core/constants/url';
import {UserProfileModel} from "@core/models/user-profile.model";
import {ArticleModel} from "@core/models/article.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    const url = baseURL + 'users/';
    return this.http.get<UserModel[]>(url, httpOptions);
  }

  getUser(id: number): Observable<UserModel> {
    const url = baseURL + 'user/?id=' + id;
    return this.http.get<UserModel>(url, httpOptions);
  }

  getProfiles(): Observable<UserProfileModel[]> {
    const url = baseURL + 'profiles/';
    return this.http.get<UserProfileModel[]>(url, httpOptions);
  }

  getProfile(userid: number): Observable<UserProfileModel> {
    const url = baseURL + 'profile/?userid=' + userid;
    return this.http.get<UserProfileModel>(url, httpOptions);
  }

  createProfile(prof: UserProfileModel): Observable<any> {
    const url = baseURL + 'create/profile/';
    return this.http.post(url, prof, httpOptions);
  }

  // updateProfile(prof: UserProfileModel): Observable<any> {
  //   const url = baseURL + 'update/profile?userid=' + prof.user.id + '/';
  //   return this.http.put(url, prof, httpOptions);
  // }
}
