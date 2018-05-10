import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCollectsPageComponent } from './my-collects-page.component';

describe('MyCollectsPageComponent', () => {
  let component: MyCollectsPageComponent;
  let fixture: ComponentFixture<MyCollectsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCollectsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
