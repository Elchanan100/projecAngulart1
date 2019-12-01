import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowtBComponent } from './cowt-b.component';

describe('CowtBComponent', () => {
  let component: CowtBComponent;
  let fixture: ComponentFixture<CowtBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowtBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowtBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
