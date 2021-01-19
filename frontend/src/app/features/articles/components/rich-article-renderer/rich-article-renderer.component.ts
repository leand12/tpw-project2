import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { htmlRatingIcons } from '../../../../core/utils/html-rating-icons';
import {baseURL} from '@core/constants/url';

@Component({
  selector: 'app-rich-article-renderer',
  templateUrl: './rich-article-renderer.component.html',
  styleUrls: ['./rich-article-renderer.component.css'],
  // styles: [`[highlight]{background: green; color: white}`]
})
export class RichArticleRendererComponent implements OnInit, AfterViewInit {
  @Input() article: any;
  @ViewChild('rating') ratingView: ElementRef;

  articleImage: string;
  userRating: number;
  userReviewsNum: number;

  constructor() { }

  ngOnInit(): void {
    if (this.article.items_in_article.length > 0) {
      this.articleImage = baseURL + this.article.items_in_article[0].image;
    }
    this.userRating = 4;
    this.userReviewsNum = 10;
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }

}
