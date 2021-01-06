import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { TagModel } from '../models/tag.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class TagService {
  private baseURL = 'http://localhost:8000/ws/';
  constructor(private http: HttpClient) { }

  getNTags(num: number): Observable<TagModel[]> {
    const url = this.baseURL + 'tags?num=' + num;
    return this.http.get<TagModel[]>(url, httpOptions);
  }
}
