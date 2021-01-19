import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import {ReviewModel, ReviewReadModel} from '@core/models/review.model';
import {serviceURL} from '@core/constants/url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviews(): Observable<ReviewModel[]> {
    const url = serviceURL + 'reviews/';
    return this.http.get<ReviewModel[]>(url, httpOptions);
  }

  getReviewsFiltered(num?, rate?, reviewer?, reviewed?): Observable<ReviewReadModel[]> {
    let url: string = serviceURL + 'reviews/?';

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

    return this.http.get<ReviewReadModel[]>(url, httpOptions);
  }

  getReview(id: number): Observable<ReviewReadModel> {
    const url = serviceURL + 'review/?id=' + id;
    return this.http.get<ReviewReadModel>(url, httpOptions);
  }

  createReview(rev: ReviewModel): Observable<any> {
    const url = serviceURL + 'create/review/';
    return this.http.post(url, rev, httpOptions);
  }
}
