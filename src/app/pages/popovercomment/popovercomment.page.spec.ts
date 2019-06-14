import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopovercommentPage } from './popovercomment.page';

describe('PopovercommentPage', () => {
  let component: PopovercommentPage;
  let fixture: ComponentFixture<PopovercommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopovercommentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopovercommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
