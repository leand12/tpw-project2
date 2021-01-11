import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { htmlRatingIcons } from '../../../../core/utils/html-rating-icons';

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
    this.articleImage = 'http://localhost:8000/media/user_1/item_2422e19c-707b-4aa4-899e-1d5bc248e06c';
    this.userRating = 4;
    this.userReviewsNum = 10;
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }

}
