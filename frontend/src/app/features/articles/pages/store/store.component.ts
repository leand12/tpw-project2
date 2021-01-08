import { Component, OnInit } from '@angular/core';
import { TagModel } from '../../../../core/models/tag.model';
import { TagService } from '../../../../core/services/tag.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [TagService]
})
export class StoreComponent implements OnInit {
  tags: TagModel[];
  error: any;
  selectedPlatform: string;
  articles: any;

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.selectedPlatform = 'WI';
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
    this.getTags();
  }

  getTags(): void {
    this.tagService.getNTags(2).subscribe(
      tags => this.tags = tags,
      error => this.error = error
    );
  }
}
