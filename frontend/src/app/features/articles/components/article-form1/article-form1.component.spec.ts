import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleForm1Component } from './article-form1.component';

describe('ArticleForm1Component', () => {
  let component: ArticleForm1Component;
  let fixture: ComponentFixture<ArticleForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
