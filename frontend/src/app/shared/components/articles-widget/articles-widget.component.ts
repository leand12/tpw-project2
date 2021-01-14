import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-widget',
  templateUrl: './articles-widget.component.html',
  styleUrls: ['./articles-widget.component.css']
})
export class ArticlesWidgetComponent implements OnInit {
  @Input() redTitle?: string;
  @Input() title: string;
  @Input() articles: any;
  @Input() viewMoreUrl?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
