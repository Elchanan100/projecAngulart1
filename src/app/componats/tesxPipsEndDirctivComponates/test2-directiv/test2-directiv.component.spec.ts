import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2DirectivComponent } from './test2-directiv.component';

describe('Test2DirectivComponent', () => {
  let component: Test2DirectivComponent;
  let fixture: ComponentFixture<Test2DirectivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2DirectivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2DirectivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
