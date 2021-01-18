import { Component, OnInit } from '@angular/core';
import {global} from '@core/utils/global';
import {ArticleModel} from '@core/models/article.model';
import {ArticleService} from '@core/services/article.service';
import {UserModel} from '@core/models/user.model';
import {UserService} from '@core/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ArticleService, UserService]
})
export class CreateComponent implements OnInit {
  step1: boolean;
  article: any;
  userId: string;

  constructor(private articleService: ArticleService, private userService: UserService) { }

  ngOnInit(): void {
    this.step1 = true;
    this.userId = global.getUserId();
    this.getTempArticle();
  }

  getTempArticle(): void {
    this.articleService.getArticle(undefined, this.userId).subscribe(
      (article) => {
        this.article = article;
      }, (err) => {
        if (err.status === 404) {
          // temporary article doesn't exist, create one
          this.createTempArticle();
        }
      }
    );
  }

  createTempArticle(): void {
      const a = new ArticleModel();
      a.name = this.userId;
      a.seller = parseInt(this.userId, 10);
      a.items_in_article = [];
      this.articleService.createArticle(a).subscribe(
        (article) => {
          this.article = article;
        }
      );
  }
}
