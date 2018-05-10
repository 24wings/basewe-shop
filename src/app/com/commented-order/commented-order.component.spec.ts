import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentedOrderComponent } from './commented-order.component';

describe('CommentedOrderComponent', () => {
  let component: CommentedOrderComponent;
  let fixture: ComponentFixture<CommentedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
