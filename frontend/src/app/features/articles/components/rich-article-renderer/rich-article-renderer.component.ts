import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rich-article-renderer',
  templateUrl: './rich-article-renderer.component.html',
  styleUrls: ['./rich-article-renderer.component.css']
})
export class RichArticleRendererComponent implements OnInit {
  @Input() article: any;
  articleImage: string;
  articleRating: number;
  userReviewsNum: number;

  constructor() { }

  ngOnInit(): void {
    this.articleImage = 'http://localhost:8000/media/user_1/item_2422e19c-707b-4aa4-899e-1d5bc248e06c';
    this.articleRating = 4;
    this.userReviewsNum = 10;
  }

}
