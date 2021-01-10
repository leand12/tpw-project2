import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesWidgetComponent } from './articles-widget.component';

describe('ArticleWidgetComponent', () => {
  let component: ArticlesWidgetComponent;
  let fixture: ComponentFixture<ArticlesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
