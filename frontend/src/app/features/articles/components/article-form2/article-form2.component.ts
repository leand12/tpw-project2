import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-article-form2',
  templateUrl: './article-form2.component.html',
  styleUrls: ['./article-form2.component.css']
})
export class ArticleForm2Component implements OnInit {
  @Input() article?: any;
  @Input() step: boolean;
  @Output() stepChange = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
