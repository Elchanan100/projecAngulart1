import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2PipComponent } from './test2-pip.component';

describe('Test2PipComponent', () => {
  let component: Test2PipComponent;
  let fixture: ComponentFixture<Test2PipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2PipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2PipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
