import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImieipostPage } from './imieipost.page';

describe('ImieipostPage', () => {
  let component: ImieipostPage;
  let fixture: ComponentFixture<ImieipostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImieipostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImieipostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
