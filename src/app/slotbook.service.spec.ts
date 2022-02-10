import { TestBed } from '@angular/core/testing';

import { SlotbookService } from './slotbook.service';

describe('SlotbookService', () => {
  let service: SlotbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
