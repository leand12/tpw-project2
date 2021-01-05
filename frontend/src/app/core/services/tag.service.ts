import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { ArticlesModule } from '../../features/articles/articles.module';

import { TagModel } from '../models/tag.model';


@Injectable()
export class TagService {
  private baseURL = 'http://localhost:8000/ws/';
  constructor(private http: HttpClient) { }

  getNTags(num: number): Observable<TagModel[]> {
    const url = this.baseURL + 'tags?num=' + num;
    return this.http.get<TagModel[]>(url);
  }
}
