import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {htmlRatingIcons} from '../../../../core/utils/html-rating-icons';
import {TagService} from '../../../../core/services/tag.service';
import {ArticleService} from '../../../../core/services/article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [TagService, ArticleService]
})
export class DetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('rating') ratingView: ElementRef;
  article: any;
  articleImage: any;
  articleTags: any;
  articleSeller: any;
  relatedArticles: any;
  userRating: number;
  userReviews: any;

  constructor(private tagService: TagService, private articleService: ArticleService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getURLState();

    // TODO: call api
    this.articleImage = 'http://localhost:8000/media/user_1/item_2422e19c-707b-4aa4-899e-1d5bc248e06c';
    this.userReviews = [];
    this.userRating = 2;
    this.relatedArticles = [
      {id: 1, name: 'Artigo Teste', total_price: '20.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting' +
          'industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
          ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
          ' electronic typesetting, remaining essentially unchanged. ', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [9, 11],
        is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null},
      {id: 2, name: 'Artigo Teste2', total_price: '15.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting' +
          'industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
          ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
          ' electronic typesetting, remaining essentially unchanged. ', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [9],
        is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null}
    ];
  }

  getURLState(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.getArticle(routeParams.id);
    }, (err) => console.error(err));
  }

  getArticle(id: number): void {
    this.articleService.getArticle(id).subscribe((article) => {
      this.article = article;
    }, (err) => console.error(err),
      () => {
        this.getTags();
        this.getItems();
        this.getReviews();
        this.getRelatedArticles();
    });
  }

  private getTags(): void {
    this.articleTags = [];
    for (const id of this.article.tag) {
      this.tagService.getTag(id).subscribe((tag) =>
        this.articleTags.push(tag)
      );
    }
  }

  private getItems(): void {
    return;
  }

  private getReviews(): void {
    return;
  }

  private getSeller(): void {
    return;
  }

  private getRelatedArticles(): void {
    return;
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }
}
