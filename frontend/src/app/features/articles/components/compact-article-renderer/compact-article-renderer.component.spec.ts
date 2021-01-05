import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactArticleRendererComponent } from './compact-article-renderer.component';

describe('CompactArticleRendererComponent', () => {
  let component: CompactArticleRendererComponent;
  let fixture: ComponentFixture<CompactArticleRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompactArticleRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactArticleRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
