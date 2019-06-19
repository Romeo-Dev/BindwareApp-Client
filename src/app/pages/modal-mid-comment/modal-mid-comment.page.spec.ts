import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMidCommentPage } from './modal-mid-comment.page';

describe('ModalMidCommentPage', () => {
  let component: ModalMidCommentPage;
  let fixture: ComponentFixture<ModalMidCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMidCommentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMidCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
