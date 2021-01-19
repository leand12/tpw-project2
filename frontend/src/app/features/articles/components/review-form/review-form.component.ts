import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ReviewService} from '@core/services/review.service';
import { global } from '@core/utils/global';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
  providers: [ReviewService]
})
export class ReviewFormComponent implements OnInit {
  @Input() reviewedId: any;
  @Output() newReview = new EventEmitter<any>();
  reviewForm: FormGroup;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      description: new FormControl(''),
      rate: new FormControl(0)
    });
  }

  submit(): void {
    const review = this.reviewForm.value;
    // if (!review.description) { review.description = ''; }
    // if (!review.rate) { review.rate = 0; }
    review.reviewer = global.getUserId();
    review.reviewed = this.reviewedId;
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    review.date_posted = yyyy + '-' + mm + '-' + dd;
    console.log(review);
    this.reviewService.createReview(review).subscribe(
      (r) => this.newReview.emit(r));
  }

}
