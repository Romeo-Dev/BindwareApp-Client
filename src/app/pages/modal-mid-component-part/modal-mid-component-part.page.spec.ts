import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMidComponentPartPage } from './modal-mid-component-part.page';

describe('ModalMidComponentPartPage', () => {
  let component: ModalMidComponentPartPage;
  let fixture: ComponentFixture<ModalMidComponentPartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMidComponentPartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMidComponentPartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
