import {AfterViewInit, Component, OnInit} from '@angular/core';
import { TagModel } from '@core/models/tag.model';
import { TagService } from '@core/services/tag.service';
import { ArticleService } from '@core/services/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

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
  tags: string[];
  price: string[];

  constructor(private tagService: TagService, private articleService: ArticleService,
              private router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getURLParams();
    this.getPopularTags();
  }

  getURLParams(): void {
    combineLatest(this.activeRoute.params, this.activeRoute.queryParams)
      .pipe(map(results => ({params: results[0], query: results[1]})))
      .subscribe(results => {
        this.type = results.params.type;
        this.platform = results.params.platform;
        this.search = results.query.search;
        this.tags = results.query.tags ?
          results.query.tags.split(',').filter((t) => t !== '') : undefined;
        this.price =  results.query.price ?
          results.query.price.split(',') : [undefined, undefined];
        this.getArticles();
      });
  }

  getPopularTags(): void {
    this.tagService.getTags(10).subscribe(
      popularTags => this.popularTags = popularTags,
      error => this.error = error
    );
  }

  getArticles(): void {
    this.articleService.getArticlesFiltered(
      undefined,
      this.price[1],
      this.price[0],
      false,
      undefined,
      undefined,
      this.tags,
      this.search,
      undefined,
      undefined,
      undefined,
      undefined,
      this.type,
      this.platform
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

  filterTags(tagName): void {
    if (!this.tags) {
      this.filter( {tags: tagName} );
    } else if (this.tags.includes(tagName)) {
      this.filter( {tags: this.tags.filter((t) => t !== tagName).toString()} );
    } else {
      this.filter( {tags: this.tags.concat(tagName).toString()} );
    }
  }

  ngAfterViewInit(): void {
    $.getScript('assets/js/goodgames2.js');
    $.getScript('assets/js/goodgames-init.js');
  }
}
