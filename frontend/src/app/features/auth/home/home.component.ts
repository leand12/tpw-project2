import { Component, OnInit } from '@angular/core';
import {ArticleModel} from '@models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any;
  selectedPlatform: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedPlatform = 'PS';
    this.articles = [
      {id: 1, name: 'Artigo Teste', total_price: '20.00', description: '', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [9, 11],
        is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null},
      {id: 2, name: 'Artigo Teste2', total_price: '15.00', description: '', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [9],
        is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null},
      {id: 3, name: 'Artigo Teste3', total_price: '10.00', description: '', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [11],
        is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null},
      {id: 4, name: 'Artigo Teste4', total_price: '5.00', description: '', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [],
        is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null}
    ];
  }

}
