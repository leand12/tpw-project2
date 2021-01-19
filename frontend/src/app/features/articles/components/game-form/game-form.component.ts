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
  private fileToUpload: File;

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
      price: new FormControl(game?.price),
    });
  }

  handleFileInput(files: FileList): void {
    // image validation is on backend
    this.fileToUpload = files.item(0);
  }

  submit(): void {
    const game = this.gameForm.value;
    game.pertaining_article = this.articleId;
    if (this.gameId) {
      game.id = this.gameId;
      this.gameService.updateGame(game, this.fileToUpload).subscribe(
        () => this.stateChange.emit(0),
        error => this.error = error
      );
    } else {
      this.gameService.createGame(game, this.fileToUpload).subscribe(
        () => this.stateChange.emit(0),
        error => this.error = error
        );
    }
  }

}
