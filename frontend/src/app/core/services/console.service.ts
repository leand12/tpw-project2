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

  createConsole(console: ConsoleModel): Observable<any> {
    const url = serviceURL + 'create/console/';
    return this.http.post(url, console, httpOptions);
  }

  updateConsole(console: ConsoleModel): Observable<any> {
    const url = serviceURL + 'update/console/?id=' + console.id;
    return this.http.put(url, console, httpOptions);
  }

  deleteConsole(id: number): Observable<any> {
    const url = serviceURL + 'delete/console/' + id + '/';
    return this.http.delete<ConsoleModel>(url, httpOptions);
  }
}
