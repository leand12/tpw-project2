import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { htmlRatingIcons } from '../../../../core/utils/html-rating-icons';
import {baseURL} from '@core/constants/url';
import {ReviewService} from '@core/services/review.service';

@Component({
  selector: 'app-rich-article-renderer',
  templateUrl: './rich-article-renderer.component.html',
  styleUrls: ['./rich-article-renderer.component.css'],
  providers: [ReviewService],
  // styles: [`[highlight]{background: green; color: white}`]
})
export class RichArticleRendererComponent implements OnInit, AfterViewInit {
  @Input() article: any;
  @ViewChild('rating') ratingView: ElementRef;

  articleImage: string;
  userRating: number;
  userReviewsNum: number;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    if (this.article.items_in_article.length > 0) {
      this.articleImage = baseURL + this.article.items_in_article[0].image;
    }
    this.getReviews();
  }

  private getReviews(): void {
    this.reviewService.getReviewsFiltered(undefined, undefined, undefined, this.article.seller.id)
      .subscribe((reviews) => {
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

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }

}
