import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitProductCancelOrderComponent } from './wait-product-cancel-order.component';

describe('WaitProductCancelOrderComponent', () => {
  let component: WaitProductCancelOrderComponent;
  let fixture: ComponentFixture<WaitProductCancelOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitProductCancelOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitProductCancelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
