import { TestBed } from '@angular/core/testing';

import { CanActivService } from './can-activ.service';

describe('CanActivService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivService = TestBed.get(CanActivService);
    expect(service).toBeTruthy();
  });
});
