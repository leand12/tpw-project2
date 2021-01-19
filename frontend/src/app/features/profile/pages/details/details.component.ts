import { Component, OnInit } from '@angular/core';
import {global} from '@core/utils/global';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '@core/services';
import {ArticleService} from '@core/services/article.service';
import {ReviewService} from '@core/services/review.service';
import {ReviewModel} from '@core/models/review.model';
import {UserModel} from '@core/models/user.model';
import {UserProfileModel} from "@core/models/user-profile.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ArticleService, UserService, ReviewService]
})
export class DetailsComponent implements OnInit {
  user: any;
  myself: any;
  profile: any;
  articlesOnSale: any;
  articlesSold: any;
  reviews: any;
  revProfiles: UserProfileModel[];
  avgRating = 0;

  constructor(private activeRoute: ActivatedRoute, private articleService: ArticleService,
              private reviewService: ReviewService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getURLParams();
  }

  getURLParams(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.myself = global.getUserId() === routeParams.id;
      this.getUser(routeParams.id);
      this.getProfile(routeParams.id);
      this.getArticlesOnSale(routeParams.id);
      this.getArticlesSold(routeParams.id);
      this.getReviews(routeParams.id);
    }, (err) => console.error(err));
  }

  getUser(userId: number): void {
    this.userService.getUser(userId).subscribe(
      (user) => this.user = user,
      (err) => console.error(err));
  }

  getProfile(userId: number): void {
    this.userService.getProfile(userId).subscribe(
      (profile) => this.profile = profile,
      (err) => console.error(err));
  }

  getArticlesOnSale(userId: number): void {
    this.articleService.getArticlesFiltered(
      undefined,
      undefined,
      undefined,
      false,
      userId,
      undefined,
      undefined
    ).subscribe((articles) =>
        this.articlesOnSale = articles,
      (err) => console.error(err));
  }

  getArticlesSold(userId: number): void {
    this.articleService.getArticlesFiltered(
      undefined,
      undefined,
      undefined,
      true,
      userId,
      undefined,
      undefined
    ).subscribe((articles) =>
        this.articlesSold = articles,
      (err) => console.error(err));
  }

  getReviews(userId: number): void {
    this.reviewService.getReviewsFiltered(
      undefined,
      undefined,
      undefined,
      userId
    ).subscribe((reviews) =>
        this.processReviews(reviews),
      (err) => console.error(err));
  }

  processReviews(reviews: ReviewModel[]): void {
    this.reviews = reviews;
    let count = 0;
    this.reviews.forEach((r, index) => {
      count += r.rate;
      this.getRevUser(r.reviewer, index);
    });
    if (count > 0) {
      this.avgRating = count / this.reviews.length;
    }
  }

  getRevUser(userId: any, idx: any): void {
    this.userService.getUser(userId).subscribe(
      (user) => this.reviews[idx].reviewer = user,
      (err) => console.error(err));
  }

}
