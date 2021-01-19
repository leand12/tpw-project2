import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '@core/services/article.service';
import {UserService} from '@core/services/user.service';

import {global} from '@core/utils/global';

@Component({
  selector: 'app-owned',
  templateUrl: './owned.component.html',
  styleUrls: ['./owned.component.css'],
  providers: [ArticleService, UserService]
})
export class OwnedComponent implements OnInit {
  myself: boolean;
  user: any;
  articlesOnSale: any;
  articlesSold: any;
  articlesPurchased: any;

  constructor(private activeRoute: ActivatedRoute,
              private articleService: ArticleService, private userService: UserService) { }

  ngOnInit(): void {
    this.getURLParams();
  }

  getURLParams(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.myself = global.getUserId() === routeParams.id;
      this.getUser(routeParams.id);
      this.getArticlesOnSale(routeParams.id);
      this.getArticlesSold(routeParams.id);
      this.getArticlesPurchased(routeParams.id);
    }, (err) => console.error(err));
  }

  getUser(userId: number): void {
    this.userService.getUser(userId).subscribe(
      (user) => this.user = user,
      (err) => console.error(err));
  }

  getArticlesOnSale(userId: number): void {
    this.articleService.getArticlesFiltered(
      undefined,
      undefined,
      undefined,
      false,
      userId,
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
    ).subscribe((articles) =>
        this.articlesSold = articles,
      (err) => console.error(err));
  }

  getArticlesPurchased(userId: number): void {
    this.articleService.getArticlesFiltered(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      userId,
    ).subscribe((articles) =>
        this.articlesPurchased = articles,
      (err) => console.error(err));
  }


}
