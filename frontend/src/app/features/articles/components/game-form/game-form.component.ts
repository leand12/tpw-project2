import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.stateChange.emit(0);
  }

}
