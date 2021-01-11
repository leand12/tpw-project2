import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {htmlRatingIcons} from '../../../../core/utils/html-rating-icons';

@Component({
  selector: 'app-article-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('rating') ratingView: ElementRef;
  article: any;
  articleImage: any;
  articleTags: any;
  relatedArticles: any;
  userRating: number;
  userReviews: any;

  constructor() { }

  ngOnInit(): void {
    this.articleImage = 'http://localhost:8000/media/user_1/item_2422e19c-707b-4aa4-899e-1d5bc248e06c';
    this.articleTags = [
      {id: 9, name: 'Cheap', is_popular: true},
      {id: 11, name: 'Cheap', is_popular: true},
    ];
    this.userReviews = [];
    this.userRating = 2;
    this.article = {id: 1, name: 'Artigo Teste', total_price: '20.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        'industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
        ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        ' electronic typesetting, remaining essentially unchanged. ', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [9, 11],
      is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null};
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
        is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null},
      {id: 3, name: 'Artigo Teste3', total_price: '10.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting' +
          'industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
          ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
          ' electronic typesetting, remaining essentially unchanged. ', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [11],
        is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null},
      {id: 4, name: 'Artigo Teste4', total_price: '5.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting' +
          'industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
          ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
          ' electronic typesetting, remaining essentially unchanged. ', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [],
        is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null}
    ];
  }

  ngAfterViewInit(): void {
    this.ratingView.nativeElement.innerHTML = htmlRatingIcons(this.userRating);
  }

}
