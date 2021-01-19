import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ArticleService} from '@core/services/article.service';
import {conditionChoices, platformChoices, ratingChoices} from '@core/constants/choices';
import {global} from '@core/utils/global';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '@core/services';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {ReviewReadModel} from '@core/models/review.model';
import {ArticleReadModel} from '@core/models/article.model';
declare var $: any;

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
  providers: [ArticleService, UserService]
})
export class ShopCartComponent implements OnInit, AfterViewInit {
  articles: any;
  error: any;
  user: any;
  subtotal = 0;
  feeTotal = 0;
  total = 0;

  constructor(private router: Router, private articleService: ArticleService,
              private userService: UserService, public activeRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.getCartArticles(+global.getUserId());
    this.getUser(+global.getUserId());
  }

  getCartArticles(userId: number): void {
    this.articleService.getArticlesFiltered(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      userId,
      undefined,
      undefined
    ).subscribe((articles) =>
      this.processArticles(articles),
      error => this.error = error,
    );
  }

  getUser(userId: number): void {
    this.userService.getUser(userId).subscribe(
      (user) => this.user = user,
      (err) => console.error(err));
  }

  processArticles(articles: ArticleReadModel[]): void {
    this.articles = articles;

    for (const art of articles) {
      this.subtotal += art.total_price;
      this.feeTotal += art.shipping_fee;
      this.total += (art.total_price + art.shipping_fee);
    }
  }


  ngAfterViewInit(): void {
    $.getScript('assets/js/goodgames2.js');
    $.getScript('assets/js/goodgames-init.js');
  }

}
