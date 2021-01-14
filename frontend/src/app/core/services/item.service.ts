import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {ItemModel} from '@models/item.model';
import {baseURL} from '../constants/consts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable()
export class ItemService {

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<ItemModel[]> {
    const url = baseURL + 'items';
    return this.http.get<ItemModel[]>(url, httpOptions);
  }

  getItem(id: number): Observable<ItemModel> {
    const url = baseURL + 'item?id=' + id;
    return this.http.get<ItemModel>(url, httpOptions);
  }
}
