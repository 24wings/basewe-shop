import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryViewPageComponent } from './history-view-page.component';

describe('HistoryViewPageComponent', () => {
  let component: HistoryViewPageComponent;
  let fixture: ComponentFixture<HistoryViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
