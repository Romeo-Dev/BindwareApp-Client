import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssettodetailPage } from './assettodetail.page';

describe('AssettodetailPage', () => {
  let component: AssettodetailPage;
  let fixture: ComponentFixture<AssettodetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssettodetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssettodetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
