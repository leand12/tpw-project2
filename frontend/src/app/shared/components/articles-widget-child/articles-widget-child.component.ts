import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { htmlRatingIcons } from '../../../core/utils/html-rating-icons';

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
    this.articleImage = 'http://localhost:8000/media/user_1/item_2422e19c-707b-4aa4-899e-1d5bc248e06c';
    this.userRating = 3;
    this.userReviewsNum = 5;
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }
}
