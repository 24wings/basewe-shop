import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnPaidComponent } from './un-paid.component';

describe('UnPaidComponent', () => {
  let component: UnPaidComponent;
  let fixture: ComponentFixture<UnPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
