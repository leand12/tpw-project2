import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {ItemModel} from '@models/item.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable()
export class ItemService {
  private baseURL = 'http://localhost:8000/ws/';

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<ItemModel[]> {
    const url = this.baseURL + 'items';
    return this.http.get<ItemModel[]>(url, httpOptions);
  }

  getItem(id: number): Observable<ItemModel> {
    const url = this.baseURL + 'item?id=' + id;
    return this.http.get<ItemModel>(url, httpOptions);
  }
}
