/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UtengenerateComponent } from './utengenerate.component';

describe('UtengenerateComponent', () => {
  let component: UtengenerateComponent;
  let fixture: ComponentFixture<UtengenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtengenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtengenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
