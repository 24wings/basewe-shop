import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyFxuserPageComponent } from './verify-fxuser-page.component';

describe('VerifyFxuserPageComponent', () => {
  let component: VerifyFxuserPageComponent;
  let fixture: ComponentFixture<VerifyFxuserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyFxuserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyFxuserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
