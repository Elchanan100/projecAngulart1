import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowtCComponent } from './cowt-c.component';

describe('CowtCComponent', () => {
  let component: CowtCComponent;
  let fixture: ComponentFixture<CowtCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowtCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowtCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
