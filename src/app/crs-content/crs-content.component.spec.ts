/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrsContentComponent } from './crs-content.component';

describe('CrsContentComponent', () => {
  let component: CrsContentComponent;
  let fixture: ComponentFixture<CrsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
