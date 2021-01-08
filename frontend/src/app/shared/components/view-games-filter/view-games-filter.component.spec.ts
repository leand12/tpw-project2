import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGamesFilterComponent } from './view-games-filter.component';

describe('ViewGamesFilterComponent', () => {
  let component: ViewGamesFilterComponent;
  let fixture: ComponentFixture<ViewGamesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGamesFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGamesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
