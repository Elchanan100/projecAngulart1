import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActivatPageComponent } from './can-activat-page.component';

describe('CanActivatPageComponent', () => {
  let component: CanActivatPageComponent;
  let fixture: ComponentFixture<CanActivatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanActivatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanActivatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
