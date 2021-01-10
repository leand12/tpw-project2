import {AfterViewInit, Component, OnInit} from '@angular/core';
import { TagModel } from '../../../../core/models/tag.model';
import { TagService } from '../../../../core/services/tag.service';
import {ArticleService} from '../../../../core/services/article.service';
declare var $: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [TagService, ArticleService]
})
export class StoreComponent implements OnInit, AfterViewInit {
  tags: TagModel[];
  error: any;
  selectedPlatform: string;
  articles: any;

  constructor(private tagService: TagService, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.selectedPlatform = 'WI';
    this.articles = this.getArticles();
    console.log(this.articles);
    // this.articles = [
    //   {id: 1, name: 'Artigo Teste', total_price: '20.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting' +
    //       'industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
    //       ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
    //       ' electronic typesetting, remaining essentially unchanged. ', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [9, 11],
    //     is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null},
    //   {id: 2, name: 'Artigo Teste2', total_price: '15.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting' +
    //       'industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
    //       ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
    //       ' electronic typesetting, remaining essentially unchanged. ', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [9],
    //     is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null},
    //   {id: 3, name: 'Artigo Teste3', total_price: '10.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting' +
    //       'industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
    //       ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
    //       ' electronic typesetting, remaining essentially unchanged. ', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [11],
    //     is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null},
    //   {id: 4, name: 'Artigo Teste4', total_price: '5.00', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting' +
    //       'industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
    //       ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
    //       ' electronic typesetting, remaining essentially unchanged. ', shipping_fee: '0.00', date_posted: '2021-01-07', tag: [],
    //     is_sold: false, times_viewed: 0, shop_cart: [], saved: [], seller: 1, buyer: null}
    // ];
    this.getTags();
  }

  getTags(): void {
    this.tagService.getNTags(2).subscribe(
      tags => this.tags = tags,
      error => this.error = error
    );
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(
      articles => this.articles = articles,
      error => this.error = error
    );
  }

  ngAfterViewInit(): void {
    $.getScript('assets/vendor/bootstrap-slider/dist/bootstrap-slider.min.js');
    $.getScript('assets/js/goodgames2.js');
    $.getScript('assets/js/goodgames-init.js');
    $.getScript('assets/js/demo.js');
  }
}
