import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // providers: [AuthService]
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['home']);
  }

  ngAfterViewInit(): void {
    $.getScript('assets/js/goodgames.min.js');
    $.getScript('assets/js/goodgames-init.js');
  }

}
