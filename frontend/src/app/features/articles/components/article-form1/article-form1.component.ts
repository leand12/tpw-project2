import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {State} from '@core/enums/article-form-state';
import {GameService} from '@core/services/game.service';
import {ConsoleService} from '@core/services/console.service';

@Component({
  selector: 'app-article-form1',
  templateUrl: './article-form1.component.html',
  styleUrls: ['./article-form1.component.css'],
  providers: [GameService, ConsoleService]
})
export class ArticleForm1Component implements OnInit {
  @Input() article: any;
  @Input() step: boolean;
  @Output() stepChange = new EventEmitter<boolean>();
  State = State;
  active: [State, number];
  games: any[];
  consoles: any[];
  totalPrice: number;

  constructor(private gameService: GameService, private consoleService: ConsoleService) { }

  ngOnInit(): void {
    this.handleState(State.NONE);
  }

  handleState(event: number): void {
    this.active = [event, undefined];
    this.totalPrice = 0; // TODO: change this
    this.getGames(this.article.id);
    this.getConsoles(this.article.id);
  }

  getGames(articleId: number): void {
    this.gameService.getGames(articleId).subscribe(
      (games) => {this.games = games; console.log(games); },
    );
  }

  getConsoles(articleId: number): void {
    this.consoleService.getConsoles(articleId).subscribe(
      (consoles) => this.consoles = consoles,
    );
  }

}
