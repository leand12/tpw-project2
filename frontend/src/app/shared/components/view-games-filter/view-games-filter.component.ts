import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-games-filter',
  templateUrl: './view-games-filter.component.html',
  styleUrls: ['./view-games-filter.component.css']
})
export class ViewGamesFilterComponent implements OnInit {
  @Input() selected: string;
  platforms: Array<[string, string]>;

  constructor() { }

  ngOnInit(): void {
    this.platforms = [
      ['PS', 'Playstation'],
      ['XB', 'Xbox One'],
      ['SW', 'Nintendo'],
      ['PC', 'Computer'],
      ['WI', 'Wii'],
      ['RT', 'Retro'],
    ];
  }

}
