import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1PipComponent } from './test1-pip.component';

describe('Test1PipComponent', () => {
  let component: Test1PipComponent;
  let fixture: ComponentFixture<Test1PipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1PipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1PipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
