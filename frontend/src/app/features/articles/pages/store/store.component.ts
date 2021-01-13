import {AfterViewInit, Component, OnInit} from '@angular/core';
import { TagModel } from '../../../../core/models/tag.model';
import { TagService } from '../../../../core/services/tag.service';
import { ArticleService } from '../../../../core/services/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [TagService, ArticleService]
})
export class StoreComponent implements OnInit, AfterViewInit {
  filterForm: FormGroup;
  tags: TagModel[];
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
    this.filterForm = new FormGroup({
      search: new FormControl(''),
      price: new FormControl('0,1200'),
    });
    this.getURLState();
    // then apply filters somehow
    this.getTags();
  }

  getURLState(): void {
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
    this.tagService.getNTags(2).subscribe(
      tags => this.tags = tags,
      error => this.error = error
    );
  }

  getArticles(): void {
    this.articleService.getArticlesFiltered(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      this.tag ? [this.tag] : undefined,
    ).subscribe(
      articles => this.articles = articles,
      error => this.error = error
    );
  }

  filter(): void {
    this.router.navigate(
      [this.router.url.split('?')[0] ],
      { queryParams: {
          search: this.filterForm.value.search,
          price: this.filterForm.value.price,
        }, queryParamsHandling: 'merge' });
  }

  ngAfterViewInit(): void {
    $.getScript('assets/js/goodgames2.js');
    $.getScript('assets/js/goodgames-init.js');
  }
}
