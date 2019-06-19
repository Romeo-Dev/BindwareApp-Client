import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMidAssetPage } from './modal-mid-asset.page';

describe('ModalMidAssetPage', () => {
  let component: ModalMidAssetPage;
  let fixture: ComponentFixture<ModalMidAssetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMidAssetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMidAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
