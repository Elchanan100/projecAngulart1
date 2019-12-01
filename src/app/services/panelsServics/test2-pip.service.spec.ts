import { TestBed } from '@angular/core/testing';

import { Test2PipService } from './test2-pip.service';

describe('Test2PipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test2PipService = TestBed.get(Test2PipService);
    expect(service).toBeTruthy();
  });
});
