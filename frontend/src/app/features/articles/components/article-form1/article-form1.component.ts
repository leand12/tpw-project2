import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {State} from '@core/enums/article-form-state';

@Component({
  selector: 'app-article-form1',
  templateUrl: './article-form1.component.html',
  styleUrls: ['./article-form1.component.css']
})
export class ArticleForm1Component implements OnInit {
  @Input() article?: any;
  @Input() step: boolean;
  @Output() stepChange = new EventEmitter<boolean>();
  State = State;
  active: [State, number];
  totalPrice: number;

  constructor() { }

  ngOnInit(): void {
    this.active = [State.NONE, undefined];
    this.totalPrice = 0;
  }

}
