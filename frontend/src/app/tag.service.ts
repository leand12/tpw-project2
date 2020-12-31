import { Injectable } from '@angular/core';
import { Tag } from './tag';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private baseURL = 'http://localhost:8000/ws/';
  constructor(private http: HttpClient) { }

  getNTags(num: number): Observable<Tag[]> {
    const url = this.baseURL + 'tags?num=' + num;
    return this.http.get<Tag[]>(url);
  }
}
