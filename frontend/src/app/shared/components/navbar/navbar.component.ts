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
    $.getScript('assets/vendor/gsap/src/minified/TweenMax.min.js');
    $.getScript('assets/vendor/gsap/src/minified/plugins/ScrollToPlugin.min.js');
    $.getScript('assets/js/goodgames.js');
    $.getScript('assets/js/goodgames-init.js');
  }

}
