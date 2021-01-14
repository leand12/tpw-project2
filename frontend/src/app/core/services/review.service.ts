import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import {ReviewModel} from '@core/models/review.model';
import {baseURL} from '@core/constants/consts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviews(): Observable<ReviewModel[]> {
    const url = baseURL + 'reviews';
    return this.http.get<ReviewModel[]>(url, httpOptions);
  }

  getReviewsFiltered(num?, rate?, reviewer?, reviewed?): Observable<ReviewModel[]> {
    let url: string = baseURL + 'reviews?';

    if (num !== undefined)
    {
      url += '&num=' + num;
    }

    if (rate !== undefined)
    {
      url += '&rate=' + rate;
    }

    if (reviewer !== undefined)
    {
      url += '&reviewer=' + reviewer;
    }

    if (reviewed !== undefined)
    {
      url += '&reviewed=' + reviewed;
    }

    url += '/';
    return this.http.get<ReviewModel[]>(url, httpOptions);
  }

  getReview(id: number): Observable<ReviewModel> {
    const url = baseURL + 'review?id=' + id;
    return this.http.get<ReviewModel>(url, httpOptions);
  }

  createReview(rev: ReviewModel): Observable<any> {
    const url = baseURL + 'create/review/';
    return this.http.post(url, rev, httpOptions);
  }
}
