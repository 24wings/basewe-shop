import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciveAddressPageComponent } from './recive-address-page.component';

describe('ReciveAddressPageComponent', () => {
  let component: ReciveAddressPageComponent;
  let fixture: ComponentFixture<ReciveAddressPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciveAddressPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciveAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
