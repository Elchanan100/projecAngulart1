import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataActivComponent } from './data-activ.component';

describe('DataActivComponent', () => {
  let component: DataActivComponent;
  let fixture: ComponentFixture<DataActivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataActivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataActivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
