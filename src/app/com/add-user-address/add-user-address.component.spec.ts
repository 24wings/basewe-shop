import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAddressComponent } from './add-user-address.component';

describe('AddUserAddressComponent', () => {
  let component: AddUserAddressComponent;
  let fixture: ComponentFixture<AddUserAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
