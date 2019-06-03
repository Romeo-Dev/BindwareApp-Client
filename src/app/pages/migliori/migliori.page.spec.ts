import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiglioriPage } from './migliori.page';

describe('MiglioriPage', () => {
  let component: MiglioriPage;
  let fixture: ComponentFixture<MiglioriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiglioriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiglioriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
