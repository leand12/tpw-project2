import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '@core/services/article.service';

@Component({
  selector: 'app-owned',
  templateUrl: './owned.component.html',
  styleUrls: ['./owned.component.css'],
  providers: [ArticleService]
})
export class OwnedComponent implements OnInit {
  articlesOnSale: any;
  articlesSold: any;
  articlesPurchased: any;

  constructor(private activeRoute: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getURLParams();
  }

  getURLParams(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.getArticlesOnSale(routeParams.id);
      this.getArticlesSold(routeParams.id);
      this.getArticlesPurchased(routeParams.id);
    }, (err) => console.error(err));
  }

  getArticlesOnSale(userId: number): void {
    console.log(userId)
    this.articleService.getArticlesFiltered(
      undefined,
      undefined,
      undefined,
      undefined,
      userId,
      undefined,
      undefined
    ).subscribe((article) => {
      this.articlesOnSale = article;
    }, (err) => console.error(err));
  }

  getArticlesSold(userId: number): void {
    this.articleService.getArticlesFiltered(
      undefined,
      undefined,
      undefined,
      userId,
      undefined,
      undefined,
      undefined
    ).subscribe((article) => {
      this.articlesSold = article;
    }, (err) => console.error(err));
  }

  getArticlesPurchased(userId: number): void {
    this.articleService.getArticlesFiltered(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      userId,
      undefined
    ).subscribe((article) => {
      this.articlesPurchased = article;
    }, (err) => console.error(err));
  }


}
