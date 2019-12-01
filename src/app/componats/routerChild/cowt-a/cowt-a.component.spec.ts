import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowtAComponent } from './cowt-a.component';

describe('CowtAComponent', () => {
  let component: CowtAComponent;
  let fixture: ComponentFixture<CowtAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowtAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowtAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
