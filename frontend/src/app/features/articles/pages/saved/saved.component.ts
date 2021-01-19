import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ArticleService} from '@core/services/article.service';
import {conditionChoices, platformChoices, ratingChoices} from '@core/constants/choices';
import {global} from '@core/utils/global';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '@core/services';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
  providers: [ArticleService, UserService],
})
export class SavedComponent implements OnInit, AfterViewInit {
  articles: any;
  error: any;
  objectKeys = Object.keys;
  conditions = conditionChoices;
  user: any;
  search: string;
  condition: any;
  price: string[];

  constructor(private router: Router, private articleService: ArticleService,
              private userService: UserService, public activeRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.getURLParams();
  }

  getURLParams(): void {
    combineLatest(this.activeRoute.params, this.activeRoute.queryParams)
      .pipe(map(results => ({params: results[0], query: results[1]})))
      .subscribe(results => {
        this.search = results.query.search;
        this.condition = results.query.condition !== '' ? results.query.condition : undefined;
        this.price =  results.query.price ?
          results.query.price.split(',') : [undefined, undefined];
        this.getSavedArticles(+global.getUserId());
        this.getUser(+global.getUserId());
      });
  }

  getSavedArticles(userId: number): void {
    this.articleService.getArticlesFiltered(
      undefined,
      this.price[1],
      this.price[0],
      undefined,
      undefined,
      undefined,
      undefined,
      this.search,
      undefined,
      userId,
      undefined,
      this.condition
    ).subscribe(
      articles => this.articles = articles,
      error => this.error = error,
    );
  }

  getUser(userId: number): void {
    this.userService.getUser(userId).subscribe(
      (user) => this.user = user,
      (err) => console.error(err));
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
