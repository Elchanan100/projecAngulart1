import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowtMenuComponent } from './cowt-menu.component';

describe('CowtMenuComponent', () => {
  let component: CowtMenuComponent;
  let fixture: ComponentFixture<CowtMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowtMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowtMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
