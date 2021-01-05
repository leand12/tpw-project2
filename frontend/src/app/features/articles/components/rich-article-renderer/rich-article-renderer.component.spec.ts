import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichArticleRendererComponent } from './rich-article-renderer.component';

describe('RichArticleRendererComponent', () => {
  let component: RichArticleRendererComponent;
  let fixture: ComponentFixture<RichArticleRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichArticleRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichArticleRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
