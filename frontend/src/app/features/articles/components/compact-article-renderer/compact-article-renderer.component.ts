import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { htmlRatingIcons } from '../../../../core/utils/html-rating-icons';
import {TagModel} from '@core/models/tag.model';
import {baseURL} from '@core/constants/url';


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
    if (this.article.items_in_article.length > 0) {
      this.articleImage = baseURL + this.article.items_in_article[0].image;
    }
    // TODO: call api, and make a query?
    this.userRating = 4;
    this.userReviewsNum = 10;
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }
}
