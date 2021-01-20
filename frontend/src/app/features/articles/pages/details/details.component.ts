import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {global} from '@core/utils/global';
import {htmlRatingIcons} from '@core/utils/html-rating-icons';
import {TagService} from '@core/services/tag.service';
import {ArticleService} from '@core/services/article.service';
import {UserService} from '@core/services/user.service';
import {ReviewService} from '@core/services/review.service';

import {conditionChoices} from '@core/constants/choices';
import {baseURL} from '@core/constants/url';
import {AuthService} from '@core/services';

@Component({
  selector: 'app-article-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [TagService, ArticleService, ReviewService, AuthService]
})
export class DetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('rating') ratingView: ElementRef;
  article: any;
  articleImage: any;
  articleTags: any;
  articleSeller: any;
  relatedArticles: any;
  userRating: number;
  userReviews: any;
  conditions = conditionChoices;
  baseURL = baseURL;
  userReviewsNum: any;

  constructor(private router: Router, private activeRoute: ActivatedRoute,
              private tagService: TagService, private articleService: ArticleService,
              private reviewService: ReviewService, public authService: AuthService) { }

  ngOnInit(): void {
    this.getURLParams();
  }

  handleNewReview(review: any): void {
    this.userReviews.push(review);
  }

  getURLParams(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.getArticle(routeParams.id);
    }, (err) => console.error(err));
  }

  getArticle(id: number): void {
    this.articleService.getArticle(id).subscribe((article) => {
      this.article = article;
    }, (err) => console.error(err),
      () => {
        if (this.article.items_in_article.length > 0) {
          this.articleImage = baseURL + this.article.items_in_article[0].image;
        }
        this.getReviews();
        this.getRelatedArticles();
    });
  }

  private getReviews(): void {
    this.reviewService.getReviewsFiltered(undefined, undefined, undefined, this.article.seller.id)
      .subscribe((reviews) => {
        this.userReviews = reviews;
        let sum = 0;
        for (const r of reviews ){
          sum += r.rate;
        }
        this.userReviewsNum = reviews.length;
        this.userRating = reviews.length ? Math.floor(sum / reviews.length) : 0;
        this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
      }
    );
  }

  private getRelatedArticles(): void {
    this.articleService.getArticlesFiltered(
      4,
      undefined,
      undefined,
      false,
      undefined,
      undefined,
      this.article.tag.map((t) => t.name),
      undefined,
      undefined,
      undefined,
      true
    ).subscribe((articles) =>
        this.relatedArticles = articles,
      (err) => console.error(err));
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }

  AddCart(): void{
    const art = this.article;
    art.shop_cart.push(+global.getUserId());
    art.seller = art.seller.id;
    art.items_in_article = art.items_in_article.map((a) => a.id);

    this.articleService.updateArticle(art).subscribe();
    location.replace('/articles/shopcart');
  }

  AddSaved(): void{
    const art = this.article;
    art.saved.push(+global.getUserId());
    art.seller = art.seller.id;
    art.items_in_article = art.items_in_article.map((a) => a.id);

    this.articleService.updateArticle(art).subscribe();
    location.replace('/articles/saved');
  }
}
