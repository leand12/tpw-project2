import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { htmlRatingIcons } from '../../../../core/utils/html-rating-icons';
import {TagModel} from '@core/models/tag.model';

@Component({
  selector: 'app-compact-article-renderer',
  templateUrl: './compact-article-renderer.component.html',
  styleUrls: ['./compact-article-renderer.component.css'],
})
export class CompactArticleRendererComponent implements OnInit, AfterViewInit {
  @Input() article: any;
  @ViewChild('rating') ratingView: ElementRef;
  articleImage: string;
  userReviewsNum: number;
  userRating: number;

  constructor() { }

  ngOnInit(): void {
    // TODO: call api, and make a query?
    this.articleImage = 'http://localhost:8000/media/user_1/item_2422e19c-707b-4aa4-899e-1d5bc248e06c';
    this.userRating = 4;
    this.userReviewsNum = 10;
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }
}
