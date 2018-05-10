import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProductCancelComponent } from './send-product-cancel.component';

describe('SendProductCancelComponent', () => {
  let component: SendProductCancelComponent;
  let fixture: ComponentFixture<SendProductCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendProductCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendProductCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
