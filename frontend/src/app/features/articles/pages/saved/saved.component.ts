import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../../core/services/article.service';
declare var $: any;

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
  providers: [ArticleService],
})
export class SavedComponent implements OnInit, AfterViewInit {
  articles: any;
  error: any;
  conditions: Array<[string, string]>;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.conditions = [
      ['B', 'Brand New'],
      ['L', 'Like New'],
      ['V', 'Very Good'],
      ['G', 'Good'],
      ['A', 'Acceptable'],
    ];
    this.getSavedArticles();
  }

  getSavedArticles(): void {
    // FIXME: calling wrong method for testing purposes
    this.articleService.getArticles().subscribe(
      articles => this.articles = articles,
      error => this.error = error,
    );
  }

  ngAfterViewInit(): void {
    $.getScript('assets/js/goodgames2.js');
    $.getScript('assets/js/goodgames-init.js');
  }
}
