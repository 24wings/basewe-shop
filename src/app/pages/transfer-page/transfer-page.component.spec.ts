import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsPageComponent } from './logistics-page.component';

describe('LogisticsPageComponent', () => {
  let component: LogisticsPageComponent;
  let fixture: ComponentFixture<LogisticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
