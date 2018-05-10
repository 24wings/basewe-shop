import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpayOrderComponent } from './unpay-order.component';

describe('UnpayOrderComponent', () => {
  let component: UnpayOrderComponent;
  let fixture: ComponentFixture<UnpayOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpayOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpayOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
