import {AfterViewInit, Component, OnInit} from '@angular/core';
import { TagModel } from '../../../../core/models/tag.model';
import { TagService } from '../../../../core/services/tag.service';
import { ArticleService } from '../../../../core/services/article.service';

declare var $: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [TagService, ArticleService]
})
export class StoreComponent implements OnInit, AfterViewInit {
  tags: TagModel[];
  error: any;
  selectedPlatform: string;
  articles: any;

  constructor(private tagService: TagService, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.selectedPlatform = 'WI';
    this.getArticles();
    this.getTags();
  }

  getTags(): void {
    this.tagService.getNTags(2).subscribe(
      tags => this.tags = tags,
      error => this.error = error
    );
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(
      articles => this.articles = articles,
      error => this.error = error
    );
  }

  ngAfterViewInit(): void {
    // $.getScript('assets/vendor/bootstrap-slider/dist/bootstrap-slider.min.js');
    // $.getScript('assets/js/goodgames2.js');
    // $.getScript('assets/js/goodgames-init.js');
    // $.getScript('assets/js/demo.js');
  }
}
