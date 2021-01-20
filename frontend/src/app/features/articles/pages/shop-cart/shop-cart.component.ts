import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ArticleService} from '@core/services/article.service';
import {conditionChoices, platformChoices, ratingChoices} from '@core/constants/choices';
import {global} from '@core/utils/global';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '@core/services';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {ReviewReadModel} from '@core/models/review.model';
import {ArticleModel, ArticleReadModel} from '@core/models/article.model';
import {baseURL} from '@core/constants/url';
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
  baseURL = baseURL;
  failed: any;
  success: any;

  constructor(private router: Router, private articleService: ArticleService,
              private userService: UserService, public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getURLParams();
  }

  getURLParams(): void {
    combineLatest(this.activeRoute.params, this.activeRoute.queryParams)
      .pipe(map(results => ({params: results[0], query: results[1]})))
      .subscribe(results => {
        if (results.query.success === 'true'){
          this.success = true;
        }
        if (results.query.failed === 'true'){
          this.failed = true;
        }
        this.getCartArticles(+global.getUserId());
        this.getUser(+global.getUserId());
      });
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

  removeFromCart(articleread: any): void{
    articleread.seller = articleread.seller.id;
    articleread.items_in_article = articleread.items_in_article.map((a) => a.id);
    articleread.tag = articleread.tag.map((t) => t.id);
    const index: number = articleread.shop_cart.indexOf(+global.getUserId());
    if (index !== -1) {
      articleread.shop_cart.splice(index, 1);
    }
    this.articleService.updateArticle(articleread).subscribe(() => {
      // tslint:disable-next-line:only-arrow-functions typedef
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigateByUrl('/articles/shopcart');
    });
  }

  buy(): void{
    for (const art of this.articles) {
      if (art.is_sold === true){
        this.failed = true;
      }
    }
    if (this.failed !== true){
      this.success = true;
      for (const art of this.articles) {
        art.seller = art.seller.id;
        art.items_in_article = art.items_in_article.map((a) => a.id);
        art.tag = art.tag.map((t) => t.id);
        const index: number = art.shop_cart.indexOf(+global.getUserId());
        if (index !== -1) {
          art.shop_cart.splice(index, 1);
        }
        art.is_sold = true;
        art.buyer = this.user.id;
        this.articleService.updateArticle(art).subscribe();
      }
    }

    // tslint:disable-next-line:only-arrow-functions typedef
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/articles/shopcart?failed=' + this.failed + '&success=' + this.success);
  }

  goHome(): void{
    this.router.navigateByUrl('/home');
  }


  ngAfterViewInit(): void {
    $.getScript('assets/js/goodgames2.js');
    $.getScript('assets/js/goodgames-init.js');
  }

}
