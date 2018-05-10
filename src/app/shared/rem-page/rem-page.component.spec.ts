import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemPageComponent } from './rem-page.component';

describe('RemPageComponent', () => {
  let component: RemPageComponent;
  let fixture: ComponentFixture<RemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
