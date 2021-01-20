import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ArticleService} from '@core/services/article.service';
import {ItemService} from '@core/services/item.service';
import { global } from '@core/utils/global';
import {fixDecimals} from '@core/utils/utils';
import {TagService} from '@core/services/tag.service';

@Component({
  selector: 'app-article-form2',
  templateUrl: './article-form2.component.html',
  styleUrls: ['./article-form2.component.css'],
  providers: [ArticleService, ItemService, TagService]
})
export class ArticleForm2Component implements OnInit {
  @Input() article: any;
  @Input() step: boolean;
  @Output() stepChange = new EventEmitter<boolean>();
  articleForm: FormGroup;
  formName: FormControl;
  error: any;
  totalPrice: number;
  items: any[];
  tags: any[];
  selectedTags: any[];

  constructor(private router: Router, private articleService: ArticleService,
              private itemService: ItemService, private tagService: TagService) {
  }

  ngOnInit(): void {
    if (this.article.name === global.getUserId()) {
      // temporary article
      this.initForm();
    } else {
      this.initForm(this.article);
    }
    this.totalPrice = 0;
    this.getItems();
    this.getTags();
    this.selectedTags = [];
  }

  initForm(article?: any): void {
    this.formName = new FormControl(article?.name, [Validators.pattern('.*[a-zA-Z]+.*')]);
    this.articleForm = new FormGroup({
      name: this.formName,
      description: new FormControl(article?.description),
      shipping_fee: new FormControl(article?.shipping_fee),
    });
  }

  getItems(): void {
    this.itemService.getFilteredItems(this.article.id).subscribe(
      (items) => {
        this.items = items;
        items.map((i) => this.totalPrice = fixDecimals(i.price + this.totalPrice));
      },
    );
  }

  getTags(): void {
    this.tagService.getTags(10, true).subscribe(
      tags => this.tags = tags,
      error => this.error = error
    );
  }

  submit(): void {
    if (this.formName.errors) { return; }
    const article = this.articleForm.value;
    article.id = this.article.id;
    article.tag = [];
    article.seller = global.getUserId();
    article.items_in_article = this.items.map((i) => i.id);
    article.total_price = this.totalPrice;
    article.tag = this.selectedTags;
    this.articleService.updateArticle(article).subscribe(
      () => this.router.navigate(['/articles/owned', global.getUserId()], {fragment: 'onsale'}),
      error => this.error = error
    );
  }
}
