import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   username: any;
//   password: any;
//   constructor() { }
//
//   ngOnInit(): void {
//     this.loginForm = new FormGroup({
//       username: new FormControl(),
//       password: new FormControl(),
//     });
//   }
//
//   onSubmit(): void {
//     console.log(this.loginForm.value);
//   }
//
// }
  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(username: string, password: string): void {
    this.authService.login(username, password).subscribe(
      success => this.router.navigate(['home']),
      error => this.error = error
    );
  }
}
