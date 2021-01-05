import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  username: any;
  firstName: any;
  lastName: any;
  email: any;
  password1: any;
  password2: any;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password1: new FormControl(),
      password2: new FormControl(),
    });
  }

  onSubmit(): void {
    console.log(this.signupForm.value);
  }

}
