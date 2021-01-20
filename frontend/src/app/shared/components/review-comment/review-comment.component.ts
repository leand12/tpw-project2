import {Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {htmlRatingIcons} from '@core/utils/html-rating-icons';

import {UserService} from '@core/services/user.service';
import {baseURL} from '@core/constants/url';

@Component({
  selector: 'app-review-comment',
  templateUrl: './review-comment.component.html',
  styleUrls: ['./review-comment.component.css'],
  providers: [UserService],
})
export class ReviewCommentComponent implements OnInit, AfterViewInit {
  @Input() review: any;
  @ViewChild('rating') ratingView: ElementRef;
  reviewReviewer: any;
  reviewReviewerImage: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getReviewer();
  }

  getReviewer(): void {
    this.userService.getProfile(this.review.reviewer.id).subscribe(
      (profile) => {
        this.reviewReviewer = profile;
        this.reviewReviewerImage = baseURL + profile.avatar;
      },
    );
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.review.rate);
  }

}
