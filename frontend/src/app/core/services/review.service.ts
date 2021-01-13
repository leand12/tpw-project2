import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {ReviewModel} from '@models/review.model';
import {GameModel} from "@models/game.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable()
export class ReviewService {
  private baseURL = 'http://localhost:8000/ws/';

  constructor(private http: HttpClient) { }

  getReviews(): Observable<ReviewModel[]> {
    const url = this.baseURL + 'reviews';
    return this.http.get<ReviewModel[]>(url, httpOptions);
  }

  getReviewsFiltered(num = null, rate = null, reviewer = null, reviewed = null): Observable<ReviewModel[]> {
    let url: string = this.baseURL + 'reviews?';

    if (num != null)
    {
      url += '&num=' + num;
    }

    if (rate != null)
    {
      url += '&rate=' + rate;
    }

    if (reviewer != null)
    {
      url += '&reviewer=' + reviewer;
    }

    if (reviewed != null)
    {
      url += '&reviewed=' + reviewed;
    }

    url += '/';
    return this.http.get<ReviewModel[]>(url, httpOptions);
  }

  getReview(id: number): Observable<ReviewModel> {
    const url = this.baseURL + 'review?id=' + id;
    return this.http.get<ReviewModel>(url, httpOptions);
  }

  createReview(rev: GameModel): Observable<any> {
    const url = this.baseURL + 'create/review/';
    return this.http.post(url, rev, httpOptions);
  }
}
