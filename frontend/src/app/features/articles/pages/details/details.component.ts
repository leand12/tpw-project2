import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {htmlRatingIcons} from '@core/utils/html-rating-icons';
import {TagService} from '@core/services/tag.service';
import {ArticleService} from '@core/services/article.service';
import {UserService} from '@core/services/user.service';
import {ReviewService} from '@core/services/review.service';

import {conditionChoices} from '@core/constants/choices';
import {baseURL} from '@core/constants/url';

@Component({
  selector: 'app-article-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [TagService, ArticleService, ReviewService]
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

  constructor(private activeRoute: ActivatedRoute,
              private tagService: TagService, private articleService: ArticleService,
              private reviewService: ReviewService) { }

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
        this.getTags();
        this.getReviews();
        this.getRelatedArticles();
    });
  }

  private getTags(): void {
    this.articleTags = [];
    for (const id of this.article.tag) {
      this.tagService.getTag(id).subscribe((tag) =>
        this.articleTags.push(tag)
      );
    }
  }

  private getReviews(): void {
    this.reviewService.getReviewsFiltered(undefined, undefined, undefined, this.article.seller.id)
      .subscribe((reviews) =>
        this.userReviews = reviews
    );
  }

  private getRelatedArticles(): void {
    return;
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }
}
