import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {conditionChoices, platformChoices, ratingChoices} from '@core/constants/choices';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @Input() articleId?: number;
  @Input() game?: any;
  @Input() state: number;
  @Output() stateChange = new EventEmitter<number>();
  gameForm: FormGroup;
  objectKeys = Object.keys;
  conditions = conditionChoices;
  platforms = platformChoices;
  ratings = ratingChoices;

  constructor() { }

  ngOnInit(): void {
    this.gameForm = new FormGroup({
      name: new FormControl(undefined),
      publisher: new FormControl(),
      release_year: new FormControl(),
      genre: new FormControl(),
      condition: new FormControl(),
      platform: new FormControl(),
      rating: new FormControl(),
      image: new FormControl(),
      price: new FormControl(),
    });
  }

  submit(): void {
    this.stateChange.emit(0);
  }

}
