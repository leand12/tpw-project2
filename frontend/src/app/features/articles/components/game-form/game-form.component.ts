import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {conditionChoices, platformChoices, ratingChoices} from '@core/constants/choices';
import {GameService} from '@core/services/game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
  providers: [GameService]
})
export class GameFormComponent implements OnInit {
  @Input() articleId: number;
  @Input() gameId?: any;
  @Output() stateChange = new EventEmitter();
  gameForm: FormGroup;
  error: any;
  objectKeys = Object.keys;
  conditions = conditionChoices;
  platforms = platformChoices;
  ratings = ratingChoices;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    if (this.gameId) {
      this.gameService.getGame(this.gameId).subscribe((game) => this.initForm(game));
    } else {
      this.initForm();
    }
  }

  initForm(game?: any): void {
    this.gameForm = new FormGroup({
      name: new FormControl(game?.name),
      publisher: new FormControl(game?.publisher),
      release_year: new FormControl(game?.release_year),
      genre: new FormControl(game?.genre),
      condition: new FormControl(game?.condition),
      platform: new FormControl(game?.platform),
      rating: new FormControl(game?.rating),
      image: new FormControl(game?.image),
      price: new FormControl(game?.price),
    });
  }

  submit(): void {
    const game = this.gameForm.value;
    game.pertaining_article = this.articleId;
    if (this.gameId) {
      this.gameService.updateGame(game).subscribe(
        () => this.stateChange.emit(0),
        error => {
          this.error = error;
        });
    } else {
      this.gameService.createGame(game).subscribe(
        () => this.stateChange.emit(0),
        error => {
          this.error = error;
        });
    }
  }

}
