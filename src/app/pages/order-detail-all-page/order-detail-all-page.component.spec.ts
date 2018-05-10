import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailAllPageComponent } from './order-detail-all-page.component';

describe('OrderDetailAllPageComponent', () => {
  let component: OrderDetailAllPageComponent;
  let fixture: ComponentFixture<OrderDetailAllPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailAllPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailAllPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
