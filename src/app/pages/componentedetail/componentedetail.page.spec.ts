import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentedetailPage } from './componentedetail.page';

describe('ComponentedetailPage', () => {
  let component: ComponentedetailPage;
  let fixture: ComponentFixture<ComponentedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentedetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
