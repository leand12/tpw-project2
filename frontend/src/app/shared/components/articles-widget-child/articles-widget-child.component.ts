import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { htmlRatingIcons } from '../../../core/utils/html-rating-icons';
import {baseURL} from '@core/constants/url';

@Component({
  selector: 'app-articles-widget-child',
  templateUrl: './articles-widget-child.component.html',
  styleUrls: ['./articles-widget-child.component.css']
})
export class ArticlesWidgetChildComponent implements OnInit, AfterViewInit {
  @Input() article: any;
  @ViewChild('rating') ratingView: ElementRef;
  articleImage: string;
  userRating: number;
  userReviewsNum: number;

  constructor() { }

  ngOnInit(): void {
    // TODO: call api, and make a query?
    if (this.article.items_in_article.length > 0) {
      this.articleImage = baseURL + this.article.items_in_article[0].image;
    }
    this.userRating = 3;
    this.userReviewsNum = 5;
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }
}
