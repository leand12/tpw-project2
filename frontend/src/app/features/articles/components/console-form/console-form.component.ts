import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConsoleService} from '@core/services/console.service';
import {conditionChoices} from '@core/constants/choices';

@Component({
  selector: 'app-console-form',
  templateUrl: './console-form.component.html',
  styleUrls: ['./console-form.component.css'],
  providers: [ConsoleService]
})
export class ConsoleFormComponent implements OnInit {
  @Input() articleId: number;
  @Input() consoleId?: any;
  @Output() stateChange = new EventEmitter();
  consoleForm: FormGroup;
  formName: FormControl;
  error: any;
  objectKeys = Object.keys;
  conditions = conditionChoices;

  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
    if (this.consoleId) {
      this.consoleService.getConsole(this.consoleId).subscribe((console) => this.initForm(console));
    } else {
      this.initForm();
    }
  }

  initForm(console?: any): void {
    this.formName = new FormControl(console?.name, [Validators.pattern('.*[a-zA-Z]+.*')]);
    this.consoleForm = new FormGroup({
      name: this.formName,
      brand: new FormControl(console?.brand),
      release_year: new FormControl(console?.release_year),
      storage_capacity: new FormControl(console?.storage_capacity),
      color: new FormControl(console?.color),
      condition: new FormControl(console?.condition),
      image: new FormControl(console?.image),
      price: new FormControl(console?.price),
    });
  }

  submit(): void {
    if (this.formName.errors) { return; }
    const console = this.consoleForm.value;
    console.pertaining_article = this.articleId;
    if (this.consoleId) {
      console.id = this.consoleId;
      this.consoleService.updateConsole(console).subscribe(
        () => this.stateChange.emit(0),
        error => this.error = error
        );
    } else {
      this.consoleService.createConsole(console).subscribe(
        () => this.stateChange.emit(0),
        error => this.error = error
        );
    }
  }
}
