import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpostPage } from './modalpost.page';

describe('ModalpostPage', () => {
  let component: ModalpostPage;
  let fixture: ComponentFixture<ModalpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalpostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
