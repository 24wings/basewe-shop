import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartPageComponent } from './shoping-cart-page.component';

describe('ShopingCartPageComponent', () => {
  let component: ShopingCartPageComponent;
  let fixture: ComponentFixture<ShopingCartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
