import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPriceFilterComponent } from './widget-price-filter.component';

describe('WidgetPriceFilterComponent', () => {
  let component: WidgetPriceFilterComponent;
  let fixture: ComponentFixture<WidgetPriceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPriceFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPriceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
