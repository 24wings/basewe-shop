import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProductOrderComponent } from './send-product-order.component';

describe('SendProductOrderComponent', () => {
  let component: SendProductOrderComponent;
  let fixture: ComponentFixture<SendProductOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendProductOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendProductOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
