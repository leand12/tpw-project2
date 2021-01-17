import { Component, OnInit } from '@angular/core';
import {global} from '@core/utils/global';
import {ArticleModel} from '@core/models/article.model';
import {GameService} from '@core/services/game.service';
import {ArticleService} from '@core/services/article.service';
import {ConsoleService} from '@core/services/console.service';
import {UserModel} from '@core/models/user.model';
import {UserService} from '@core/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [GameService, ArticleService, ConsoleService, UserService]
})
export class CreateComponent implements OnInit {
  step1: boolean;
  article: any;

  constructor(private articleService: ArticleService, private gameService: GameService,
              private consoleService: ConsoleService, private  userService: UserService) { }

  ngOnInit(): void {
    this.step1 = true;
    this.getTempArticle();
  }

  getTempArticle(): void {
    this.articleService.getArticle(undefined, global.getUserId()).subscribe(
      (article) => {
        this.article = article
      }, (err) => {
        if (err.status === 404) {
          // temporary article doesn't exist, create one
          this.createTempArticle();
        }
      }
    );
  }

  createTempArticle(): void {
    this.userService.getUser(parseInt(global.getUserId(), 10)).subscribe(
      (user) => {
        const a = new ArticleModel();
        a.name = global.getUserId();
        a.seller = parseInt(global.getUserId(), 10);
        a.items_in_article = [];
        this.articleService.createArticle(a).subscribe(
          (article) => {
            this.article = article;
          }
        );
      }
    );
  }

}
