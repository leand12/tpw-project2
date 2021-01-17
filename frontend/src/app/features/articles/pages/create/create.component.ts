import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  step1: boolean;

  constructor() { }

  ngOnInit(): void {
    this.step1 = true;
  }

}
