import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {ArticleModel} from '@models/article.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ArticleService {
  private baseURL = 'http://localhost:8000/ws/';
  constructor(private http: HttpClient) { }

  getArticles(): Observable<ArticleModel[]> {
    const url = this.baseURL + 'articles';
    return this.http.get<ArticleModel[]>(url, httpOptions);
  }

  // tslint:disable-next-line:max-line-length
  getArticlesFiltered(num = null, maxPrice = null, minPrice = null, isSold = null, seller = null, buyer = null, tags = null): Observable<ArticleModel[]> {
    let url: string = this.baseURL + 'articles?';

    if (num != null)
    {
      url += 'num=' + num;
    }

    if (maxPrice != null)
    {
      url += 'max_price=' + maxPrice;
    }

    if (minPrice != null)
    {
      url += 'min_price=' + minPrice;
    }

    if (isSold != null)
    {
      url += 'is_sold=' + isSold;
    }

    if (seller != null)
    {
      url += 'seller=' + seller;
    }

    if (buyer != null)
    {
      url += 'buyer=' + buyer;
    }

    if (tags != null)
    {
      // tags=New,Blizzard
      let tagString = '';
      tags.forEach((element) => {
        tagString += element + ',';
      });
      url += 'tags=' + tagString;
    }

    url += '/';
    return this.http.get<ArticleModel[]>(url, httpOptions);
  }

  getArticle(id: number): Observable<ArticleModel> {
    const url = this.baseURL + 'articles?id=' + id;
    return this.http.get<ArticleModel>(url, httpOptions);
  }

  createArticle(art: ArticleModel): Observable<any> {
    const url = this.baseURL + 'create/article/';
    return this.http.post(url, art, httpOptions);
  }

  updateArticle(art: ArticleModel): Observable<any> {
    const url = this.baseURL + 'update/article/';
    return this.http.put(url, art, httpOptions);
  }

  deleteArticle(art: ArticleModel): Observable<any> {
    const url = this.baseURL + 'delete/article/' + art.id + '/';
    return this.http.delete<ArticleModel>(url, httpOptions);
  }
}
