import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryPageComponent } from './product-category-page.component';

describe('ProductCategoryPageComponent', () => {
  let component: ProductCategoryPageComponent;
  let fixture: ComponentFixture<ProductCategoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
