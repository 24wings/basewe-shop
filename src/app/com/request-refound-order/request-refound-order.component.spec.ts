import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRefoundOrderComponent } from './request-refound-order.component';

describe('RequestRefoundOrderComponent', () => {
  let component: RequestRefoundOrderComponent;
  let fixture: ComponentFixture<RequestRefoundOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRefoundOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRefoundOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
