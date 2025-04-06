import { TestBed } from '@angular/core/testing';

import { ContenfulService } from './contenful.service';

describe('ContenfulService', () => {
  let service: ContenfulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenfulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
