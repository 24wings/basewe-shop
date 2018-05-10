import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciveCancelComponent } from './recive-cancel.component';

describe('ReciveCancelComponent', () => {
  let component: ReciveCancelComponent;
  let fixture: ComponentFixture<ReciveCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciveCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciveCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
