import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit, AfterViewInit {
  articles: any;

  constructor() { }

  ngOnInit(): void {
    this.articles = [
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
    $.getScript('assets/vendor/bootstrap-slider/dist/bootstrap-slider.min.js');
    $.getScript('assets/js/goodgames2.js');
    $.getScript('assets/js/goodgames-init.js');
    $.getScript('assets/js/demo.js');
  }
}
