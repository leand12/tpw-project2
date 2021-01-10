import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-articles-widget-child',
  templateUrl: './articles-widget-child.component.html',
  styleUrls: ['./articles-widget-child.component.css']
})
export class ArticlesWidgetChildComponent implements OnInit {
  @Input() article: any;
  articleImage: string;
  articleRating: number;
  userReviewsNum: number;

  constructor() { }

  ngOnInit(): void {
    // TODO: call api, and make a query?
    this.articleImage = 'http://localhost:8000/media/user_1/item_2422e19c-707b-4aa4-899e-1d5bc248e06c';
    this.articleRating = 3;
    this.userReviewsNum = 5;
  }

}
