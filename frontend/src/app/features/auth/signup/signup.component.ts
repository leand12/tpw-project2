import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

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

  // tslint:disable-next-line:typedef
  signup() {
    const user = this.signupForm.value;
    this.authService.signup(user.username, user.firstName, user.lastName, user.email, user.password1, user.password2).subscribe(
      success => location.replace('/home'),
      error => this.error = error
    );
  }
}

