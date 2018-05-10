import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCenterPageComponent } from './person-center-page.component';

describe('PersonCenterPageComponent', () => {
  let component: PersonCenterPageComponent;
  let fixture: ComponentFixture<PersonCenterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCenterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
