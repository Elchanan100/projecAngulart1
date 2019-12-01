import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1DirectivComponent } from './test1-directiv.component';

describe('Test1DirectivComponent', () => {
  let component: Test1DirectivComponent;
  let fixture: ComponentFixture<Test1DirectivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1DirectivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1DirectivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
