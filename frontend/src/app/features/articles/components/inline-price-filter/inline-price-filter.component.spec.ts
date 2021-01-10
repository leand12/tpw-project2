import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinePriceFilterComponent } from './inline-price-filter.component';

describe('InlinePriceFilterComponent', () => {
  let component: InlinePriceFilterComponent;
  let fixture: ComponentFixture<InlinePriceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinePriceFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinePriceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
