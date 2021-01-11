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

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getSavedArticles();
  }

  getSavedArticles(): void {
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
