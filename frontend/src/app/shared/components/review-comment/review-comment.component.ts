import {Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {htmlRatingIcons} from '@core/utils/html-rating-icons';

@Component({
  selector: 'app-review-comment',
  templateUrl: './review-comment.component.html',
  styleUrls: ['./review-comment.component.css']
})
export class ReviewCommentComponent implements OnInit, AfterViewInit {
  @Input() review: any;
  @ViewChild('rating') ratingView: ElementRef;
  reviewReviewer: any;

  constructor() { }

  ngOnInit(): void {
    this.reviewReviewer = {
      username: 'HARDCODED',
    };
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.review.rate);
  }

}
