import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import {global} from '@core/utils/global';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  id: any;
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.id = global.getUserId();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn();
    this.router.navigate(['home']);
  }

  ngAfterViewInit(): void {
  }

}
