import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTracklisting.Component } from './product-tracklisting.component';

describe('ProductTracklisting.Component', () => {
  let component: ProductTracklisting.Component;
  let fixture: ComponentFixture<ProductTracklisting.Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTracklisting.Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTracklisting.Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
