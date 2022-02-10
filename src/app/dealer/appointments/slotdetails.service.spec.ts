import { TestBed } from '@angular/core/testing';

import { SlotdetailsService } from './slotdetails.service';

describe('SlotdetailsService', () => {
  let service: SlotdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
