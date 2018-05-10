import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditInfoComponent } from './modal-edit-info.component';

describe('ModalEditInfoComponent', () => {
  let component: ModalEditInfoComponent;
  let fixture: ComponentFixture<ModalEditInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
