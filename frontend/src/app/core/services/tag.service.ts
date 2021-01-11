import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { TagModel } from '../models/tag.model';

import { baseURL } from '../constants/consts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class TagService {
  constructor(private http: HttpClient) { }

  getNTags(num: number): Observable<TagModel[]> {
    const url = baseURL + 'tags?num=' + num;
    return this.http.get<TagModel[]>(url, httpOptions);
  }
}
