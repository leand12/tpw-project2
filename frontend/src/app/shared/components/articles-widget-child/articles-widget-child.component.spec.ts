import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesWidgetChildComponent } from './articles-widget-child.component';

describe('ArticlesWidgetChildComponent', () => {
  let component: ArticlesWidgetChildComponent;
  let fixture: ComponentFixture<ArticlesWidgetChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesWidgetChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesWidgetChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
