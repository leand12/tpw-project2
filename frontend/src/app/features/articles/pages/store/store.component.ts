import { Component, OnInit } from '@angular/core';
import { TagModel } from '../../../../core/models/tag.model';
import {TagService} from '../../../../core/services/tag.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [TagService]
})
export class StoreComponent implements OnInit {
  tags: TagModel[];
  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    this.tagService.getNTags(2).subscribe(tags => this.tags = tags);
  }
}
