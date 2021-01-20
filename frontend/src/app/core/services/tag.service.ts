import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { TagModel } from '@core/models/tag.model';

import { serviceURL } from '@core/constants/url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class TagService {
  constructor(private http: HttpClient) { }

  getTags(num?: number): Observable<TagModel[]> {
    const url = serviceURL + 'tags/?';
    if (num !== undefined) {
      url.concat('&num=' + num);
    }
    return this.http.get<TagModel[]>(url, httpOptions);
  }

  getTag(id: number): Observable<TagModel> {
    const url = serviceURL + 'tag/' + id;
    return this.http.get<TagModel>(url, httpOptions);
  }
}
