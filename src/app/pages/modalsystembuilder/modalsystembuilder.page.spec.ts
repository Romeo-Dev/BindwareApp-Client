import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsystembuilderPage } from './modalsystembuilder.page';

describe('ModalsystembuilderPage', () => {
  let component: ModalsystembuilderPage;
  let fixture: ComponentFixture<ModalsystembuilderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsystembuilderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsystembuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
