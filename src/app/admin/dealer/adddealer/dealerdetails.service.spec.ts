import { TestBed } from '@angular/core/testing';

import { DealerdetailsService } from './dealerdetails.service';

describe('DealerdetailsService', () => {
  let service: DealerdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealerdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
