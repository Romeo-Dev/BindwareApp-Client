import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalrivenditorePage } from './modalrivenditore.page';

describe('ModalrivenditorePage', () => {
  let component: ModalrivenditorePage;
  let fixture: ComponentFixture<ModalrivenditorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalrivenditorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalrivenditorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
