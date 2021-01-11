import {AfterViewInit, Component, OnInit} from '@angular/core';
import { TagModel } from '../../../../core/models/tag.model';
import { TagService } from '../../../../core/services/tag.service';
import { ArticleService } from '../../../../core/services/article.service';
import {ActivatedRoute} from '@angular/router';

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
  articles: any;
  type: string;
  platform: string;
  tag: string;


  constructor(private tagService: TagService, private articleService: ArticleService,
              public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getURLState();
    // then apply filters somehow
    this.getArticles();
    this.getTags();
  }

  getURLState(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.type = routeParams.type;
      this.platform = routeParams.platform;
    });
    this.activeRoute.queryParams.subscribe(routeQueryParams => {
      this.tag = routeQueryParams.tag;
    });
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
    $.getScript('assets/js/goodgames2.js');
    $.getScript('assets/js/goodgames-init.js');
  }
}
