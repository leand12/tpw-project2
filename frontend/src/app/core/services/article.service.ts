import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import {baseURL} from '@core/constants/consts';
import {ArticleModel} from '@core/models/article.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) { }

  getArticles(): Observable<ArticleModel[]> {
    const url = baseURL + 'articles';
    return this.http.get<ArticleModel[]>(url, httpOptions);
  }

  getArticlesFiltered(num?, maxPrice?, minPrice?, isSold?, seller?, buyer?, tags?: string[]): Observable<ArticleModel[]> {
    let url: string = baseURL + 'articles?';

    if (num !== undefined)
    {
      url += '&num=' + num;
    }

    if (maxPrice !== undefined)
    {
      url += '&max_price=' + maxPrice;
    }

    if (minPrice !== undefined)
    {
      url += '&min_price=' + minPrice;
    }

    if (isSold !== undefined)
    {
      url += '&is_sold=' + isSold;
    }

    if (seller !== undefined)
    {
      url += '&seller=' + seller;
    }

    if (buyer !== undefined)
    {
      url += '&buyer=' + buyer;
    }

    if (tags !== undefined)
    {
      let tagString = '';
      tags.forEach((element) => {
        tagString += element + ',';
      });
      url += '&tags=' + tagString;
    }

    console.log(url);
    return this.http.get<ArticleModel[]>(url, httpOptions);
  }

  getArticle(id: number): Observable<ArticleModel> {
    const url = baseURL + 'article?id=' + id;
    return this.http.get<ArticleModel>(url, httpOptions);
  }

  createArticle(art: ArticleModel): Observable<any> {
    const url = baseURL + 'create/article/';
    return this.http.post(url, art, httpOptions);
  }

  updateArticle(art: ArticleModel): Observable<any> {
    const url = baseURL + 'update/article/';
    return this.http.put(url, art, httpOptions);
  }

  deleteArticle(art: ArticleModel): Observable<any> {
    const url = baseURL + 'delete/article/' + art.id + '/';
    return this.http.delete<ArticleModel>(url, httpOptions);
  }
}
