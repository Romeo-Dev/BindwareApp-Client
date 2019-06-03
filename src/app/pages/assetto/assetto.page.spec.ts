import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssettoPage } from './assetto.page';

describe('AssettoPage', () => {
  let component: AssettoPage;
  let fixture: ComponentFixture<AssettoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssettoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssettoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
