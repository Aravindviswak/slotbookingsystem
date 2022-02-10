import { TestBed } from '@angular/core/testing';

import { SeditService } from './sedit.service';

describe('SeditService', () => {
  let service: SeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
