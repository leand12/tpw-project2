import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-compact-article-renderer',
  templateUrl: './compact-article-renderer.component.html',
  styleUrls: ['./compact-article-renderer.component.css']
})
export class CompactArticleRendererComponent implements OnInit {
  @Input() article: any;
  articleImage: string;
  userReviewsNum: number;
  articleRating: number;

  constructor() { }

  ngOnInit(): void {
    // TODO: call api, and make a query?
    this.articleImage = 'http://localhost:8000/media/user_1/item_2422e19c-707b-4aa4-899e-1d5bc248e06c';
    this.articleRating = 4;
    this.userReviewsNum = 10;
  }

}
