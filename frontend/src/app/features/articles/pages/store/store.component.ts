import {AfterViewInit, Component, OnInit} from '@angular/core';
import { TagModel } from '@core/models/tag.model';
import { TagService } from '@core/services/tag.service';
import { ArticleService } from '@core/services/article.service';
import {ActivatedRoute, Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [TagService, ArticleService]
})
export class StoreComponent implements OnInit, AfterViewInit {
  popularTags: TagModel[];
  error: any;
  articles: any;
  // filters
  type: string;
  platform: string;
  search: string;
  tag: string;
  price: string;

  constructor(private tagService: TagService, private articleService: ArticleService,
              private router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getURLParams();
    // then apply filters somehow
    this.getTags();
  }

  getURLParams(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.type = routeParams.type;
      this.platform = routeParams.platform;
      this.getArticles();
    });
    this.activeRoute.queryParams.subscribe(routeQueryParams => {
      this.search = routeQueryParams.search;
      this.tag = routeQueryParams.tag;
      this.price = routeQueryParams.price;
      this.getArticles();
    });
  }

  getTags(): void {
    this.tagService.getTags(10).subscribe(
      popularTags => this.popularTags = popularTags,
      error => this.error = error
    );
  }

  getArticles(): void {
    const [minPrice, maxPrice] =  this.price ?
      this.price.split(',') : [undefined, undefined];
    this.articleService.getArticlesFiltered(
      undefined,
      maxPrice,
      minPrice,
      undefined,
      undefined,
      undefined,
      this.tag ? [this.tag] : undefined,
    ).subscribe(
      articles => this.articles = articles,
      error => this.error = error
    );
  }

  filter(params): void {
    this.router.navigate(
      [this.router.url.split('?')[0] ],
      { queryParams: params, queryParamsHandling: 'merge' });
  }

  ngAfterViewInit(): void {
    $.getScript('assets/js/goodgames2.js');
    $.getScript('assets/js/goodgames-init.js');
  }
}
