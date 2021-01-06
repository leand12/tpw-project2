import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
//   signupForm: FormGroup;
//   username: any;
//   firstName: any;
//   lastName: any;
//   email: any;
//   password1: any;
//   password2: any;
//   constructor() { }
//
//   ngOnInit(): void {
//     this.signupForm = new FormGroup({
//       username: new FormControl(),
//       firstName: new FormControl(),
//       lastName: new FormControl(),
//       email: new FormControl(),
//       password1: new FormControl(),
//       password2: new FormControl(),
//     });
//   }
//
//   onSubmit(): void {
//     console.log(this.signupForm.value);
//   }
// }
  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  signup(username: string, email: string, password1: string, password2: string) {
    this.authService.signup(username, email, password1, password2).subscribe(
      success => this.router.navigate(['list']),
      error => this.error = error
    );
  }
}

