import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {platformChoices} from '@core/constants/choices';

@Component({
  selector: 'app-view-games-filter',
  templateUrl: './view-games-filter.component.html',
  styleUrls: ['./view-games-filter.component.css']
})
export class ViewGamesFilterComponent implements OnInit {
  @Input() selected: string;
  objectKeys = Object.keys;
  platforms = platformChoices;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  filterPlatform(platform: string): void {
    if (this.selected === platform) {
      this.router.navigate(
        ['/articles/store/games'],
        { queryParamsHandling: 'preserve' });
    } else {
      this.router.navigate(
        ['/articles/store/games', platform],
        { queryParamsHandling: 'preserve' });
    }
  }

}
