import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-console-form',
  templateUrl: './console-form.component.html',
  styleUrls: ['./console-form.component.css']
})
export class ConsoleFormComponent implements OnInit {
  @Input() articleId?: number;
  @Input() console?: any;
  @Input() state: number;
  @Output() stateChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.stateChange.emit(0);
  }
}
