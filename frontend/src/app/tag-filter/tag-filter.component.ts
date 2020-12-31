import { Component, OnInit } from '@angular/core';
import { Tag } from './../tag';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnInit {
  tags: Tag[];

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    this.tagService.getNTags(2).subscribe(tags => this.tags = tags);
  }

}

