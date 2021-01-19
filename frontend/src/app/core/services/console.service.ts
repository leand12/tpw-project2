import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import {serviceURL} from '@core/constants/url';
import {ConsoleModel} from '@core/models/console.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable()
export class ConsoleService {

  constructor(private http: HttpClient) {
  }

  getConsoles(pertainingArticle: number): Observable<ConsoleModel[]> {
    let url = serviceURL + 'consoles/?';
    if (pertainingArticle !== undefined) {
      url += 'pertaining_article=' + pertainingArticle;
    }
    return this.http.get<ConsoleModel[]>(url, httpOptions);
  }

  getConsole(id: number): Observable<ConsoleModel> {
    const url = serviceURL + 'console/?id=' + id;
    return this.http.get<ConsoleModel>(url, httpOptions);
  }

  createConsole(console: ConsoleModel, image?: File): Observable<any> {
    const payload = new FormData();

    payload.append('data', JSON.stringify(console));
    if (image) {
      payload.append('file', image, image.name);
    }

    const url = serviceURL + 'create/console/';
    return this.http.post(url, payload);
  }

  updateConsole(console: ConsoleModel, image?: File): Observable<any> {
    const payload = new FormData();

    payload.append('data', JSON.stringify(console));
    if (image) {
      payload.append('file', image, image.name);
    }

    const url = serviceURL + 'update/console/?id=' + console.id;
    return this.http.put(url, payload);
  }

  deleteConsole(id: number): Observable<any> {
    const url = serviceURL + 'delete/console/' + id + '/';
    return this.http.delete<ConsoleModel>(url, httpOptions);
  }
}
