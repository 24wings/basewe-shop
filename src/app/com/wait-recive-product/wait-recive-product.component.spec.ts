import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitReciveProductComponent } from './wait-recive-product.component';

describe('WaitReciveProductComponent', () => {
  let component: WaitReciveProductComponent;
  let fixture: ComponentFixture<WaitReciveProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitReciveProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitReciveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
