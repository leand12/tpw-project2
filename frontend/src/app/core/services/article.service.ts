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

  // tslint:disable-next-line:max-line-length
  getArticlesFiltered(num?, maxPrice?, minPrice?, isSold?, seller?, buyer?, tags?: string[], name?, shopCart?, saved?, timesViewed?): Observable<ArticleModel[]> {
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

    if (name !== undefined)
    {
      url += '&name=' + name;
    }

    if (shopCart !== undefined)
    {
      url += '&shop_cart=' + shopCart;
    }

    if (saved !== undefined)
    {
      url += '&saved=' + saved;
    }

    if (timesViewed !== undefined)
    {
      url += '&times_viewed=' + timesViewed;
    }

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
    const url = baseURL + 'update/article?id=' + art.id;
    return this.http.put(url, art, httpOptions);
  }

  deleteArticle(art: ArticleModel): Observable<any> {
    const url = baseURL + 'delete/article/' + art.id + '/';
    return this.http.delete<ArticleModel>(url, httpOptions);
  }
}
