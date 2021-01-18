import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ArticleService} from '@core/services/article.service';
import {ItemService} from '@core/services/item.service';
import { global } from '@core/utils/global';

@Component({
  selector: 'app-article-form2',
  templateUrl: './article-form2.component.html',
  styleUrls: ['./article-form2.component.css'],
  providers: [ArticleService, ItemService]
})
export class ArticleForm2Component implements OnInit {
  @Input() article: any;
  @Input() step: boolean;
  @Output() stepChange = new EventEmitter<boolean>();
  articleForm: FormGroup;
  error: any;
  totalPrice: number;
  items: any[];

  constructor(private router: Router, private articleService: ArticleService, private itemService: ItemService) {
  }

  ngOnInit(): void {
    if (this.article.name === global.getUserId()) {
      // temporary article
      this.initForm();
    } else {
      this.initForm(this.article);
    }
    this.getItems();
    this.totalPrice = 0;
  }

  initForm(article?: any): void {
    this.articleForm = new FormGroup({
      name: new FormControl(article?.name),
      description: new FormControl(article?.description),
      shipping_time: new FormControl(article?.shipping_time),
      shipping_fee: new FormControl(article?.shipping_fee),
      tag: new FormControl(article?.tag),
    });
  }

  getItems(): void {
    this.itemService.getFilteredItems(this.article.id).subscribe(
      (items) => this.items = items,
    );
  }

  submit(): void {
    const article = this.articleForm.value;
    article.id = this.article.id;
    article.tag = [];
    article.seller = global.getUserId();
    article.items_in_article = this.items.map((i) => i.id);
    this.articleService.updateArticle(article).subscribe(
      () => this.router.navigate(['/articles/owned', global.getUserId()], {fragment: 'onsale'}),
      error => this.error = error
    );
  }
}
