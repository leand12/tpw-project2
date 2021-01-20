import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import {serviceURL} from '@core/constants/url';
import {ArticleModel, ArticleReadModel} from '@core/models/article.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) { }

  getArticles(): Observable<ArticleModel[]> {
    const url = serviceURL + 'articles/';
    return this.http.get<ArticleModel[]>(url, httpOptions);
  }

  getArticlesFiltered(num?, maxPrice?, minPrice?, isSold?, seller?, buyer?, tags?: string[], name?, shopCart?, saved?,
                      timesViewed?, condition?, type?, platform?): Observable<ArticleReadModel[]> {
    let url: string = serviceURL + 'articles/?';

    if (num !== undefined)         {url += '&num=' + num; }
    if (maxPrice !== undefined)    {url += '&max_price=' + maxPrice; }
    if (minPrice !== undefined)    {url += '&min_price=' + minPrice; }
    if (isSold !== undefined)      {url += '&is_sold=' + isSold; }
    if (seller !== undefined)      {url += '&seller=' + seller; }
    if (buyer !== undefined)       {url += '&buyer=' + buyer; }
    if (name !== undefined)        {url += '&name=' + name; }
    if (shopCart !== undefined)    {url += '&shop_cart=' + shopCart; }
    if (saved !== undefined)       {url += '&saved=' + saved; }
    if (timesViewed !== undefined) {url += '&times_viewed=' + timesViewed; }
    if (condition !== undefined)   {url += '&condition=' + condition; }
    if (type !== undefined)        {url += '&type=' + type; }
    if (platform !== undefined)    {url += '&platform=' + platform; }
    if (tags !== undefined)        {url += '&tags=' + tags.toString(); }

    return this.http.get<ArticleReadModel[]>(url, httpOptions);
  }

  getArticle(id?: number, name?: string): Observable<ArticleReadModel> {
    let url = serviceURL + 'article/?';
    if (id !== undefined) {
      url += 'id=' + id;
    } else if (name !== undefined) {
      url += 'name=' + name;
    } else {
      throw new Error('Provide one parameter.');
    }
    return this.http.get<ArticleReadModel>(url, httpOptions);
  }

  createArticle(art: ArticleModel): Observable<any> {
    const url = serviceURL + 'create/article/';
    return this.http.post(url, art, httpOptions);
  }

  updateArticle(art: ArticleModel): Observable<any> {
    const url = serviceURL + 'update/article/?id=' + art.id;
    return this.http.put(url, art, httpOptions);
  }

  deleteArticle(art: ArticleModel): Observable<any> {
    const url = serviceURL + 'delete/article/' + art.id + '/';
    return this.http.delete<ArticleModel>(url, httpOptions);
  }
}
