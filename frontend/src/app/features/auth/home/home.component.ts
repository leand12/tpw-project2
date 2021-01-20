import { Component, OnInit } from '@angular/core';
import {ArticleService} from '@core/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  popularArticles: any[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getPopularArticles();
  }

  getPopularArticles(): void {
    this.articleService.getArticlesFiltered(
      6,
      undefined,
      undefined,
      false,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'true',
    ).subscribe(
      articles => this.popularArticles = articles,
    );
  }
}
